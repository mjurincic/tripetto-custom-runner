import ReactDOM from "react-dom";
import { IDefinition, ISnapshot, L10n, TL10n, fingerprint, isFunction, mountNamespace } from "tripetto-runner-foundation";
import { TRunnerPreviewData, TRunnerViews } from "tripetto-runner-react-hook";
import {
    AutoscrollRunner,
    IAutoscroll,
    IAutoscrollController,
    IAutoscrollRunner,
    IAutoscrollSnapshot,
    IAutoscrollStyles,
    namespace
} from "tripetto-runner-autoscroll";

const PACKAGE_NAME: string = "tripetto-runner-autoscroll";
const PACKAGE_VERSION: string = "5.7.1";

/** This counter is incremented on each run. */
let runCounter = 0;

/**
 * Bootstraps a new runner.
 * @param props Specifies the properties for the runner.
 * @returns Returns a promise to the runner controller.
 */
export async function run(props: IAutoscroll): Promise<IAutoscrollRunner> {
    const l10nNamespace = L10n.Namespace.create(`${namespace}:${runCounter++}`);
    const cache = {
        locales: {} as {
            [domain: string]: {
                locale: L10n.ILocale | undefined;
            };
        },
        translations: {} as {
            [domain: string]: {
                translation: L10n.TTranslation | L10n.TTranslation[] | undefined;
            };
        },
        definition: {
            clusters: [],
            builder: {
                name: "",
                version: "",
            },
        } as IDefinition,
        controller: [undefined] as [undefined | IAutoscrollController],
    };

    const [definition, snapshot, styles, l10n] = await Promise.all([
        Promise.resolve(props.definition),
        Promise.resolve(props.snapshot),
        Promise.resolve(props.styles),
        Promise.resolve(props.l10n),
    ]);

    const processL10n = async (data: TL10n) => {
        const currentDefinition = (cache.controller[0] && cache.controller[0].definition) || definition || cache.definition;

        l10nNamespace.reset(
            (data.language !== "auto" && data.language) ||
                (currentDefinition && currentDefinition.language) ||
                props.language ||
                navigator.language
        );

        if (props.translations || props.locale) {
            const localeDomain = data.locale || "auto";
            const localeResult = cache.locales[localeDomain]
                ? cache.locales[localeDomain].locale
                : isFunction(props.locale)
                ? props.locale(localeDomain)
                : props.locale;
            const translationResult = cache.translations[l10nNamespace.current]
                ? cache.translations[l10nNamespace.current].translation
                : (isFunction(props.translations)
                      ? props.translations(l10nNamespace.current, PACKAGE_NAME, PACKAGE_VERSION)
                      : props.translations) || undefined;
            const [locale, translation] = await Promise.all([Promise.resolve(localeResult), Promise.resolve(translationResult)]);

            cache.locales[localeDomain] = {
                locale,
            };

            cache.translations[l10nNamespace.current] = {
                translation,
            };

            if (locale) {
                l10nNamespace.locale.load(locale);
            }

            if (translation) {
                l10nNamespace.load(translation, false);
            }
        }

        if (data.translations) {
            l10nNamespace.load(data.translations, false, "overwrite");
        }
    };

    await processL10n(l10n || {});

    const localSnapshot = {
        data: undefined as ISnapshot<IAutoscrollSnapshot> | undefined,
        save: () => {
            if (cache.controller[0] && localStorage) {
                const key = `${PACKAGE_NAME}-${cache.controller[0].fingerprint}`;
                const data = cache.controller[0].snapshot;

                if (data) {
                    localStorage.setItem(key, JSON.stringify(data));
                } else {
                    localStorage.removeItem(key);
                }
            }
        },
    };

    const isLive = props.view !== "test" && props.view !== "preview";
    const element = props.element || document.body.appendChild(document.createElement("div"));

    if (props.persistent && isLive && typeof window !== "undefined" && localStorage) {
        localSnapshot.data =
            JSON.parse(localStorage.getItem(`${PACKAGE_NAME}-${fingerprint(definition || cache.definition)}`) || "null") || undefined;

        // window.addEventListener("unload", localSnapshot.save);
        // window.addEventListener("pagehide", localSnapshot.save);
        // window.addEventListener("visibilitychange", localSnapshot.save);
        document.onvisibilitychange = function() {
            if (document.visibilityState === 'hidden') {
                localSnapshot.save()
            }
        };
    }

    ReactDOM.render(
        <AutoscrollRunner
            definition={definition || cache.definition}
            snapshot={snapshot || localSnapshot.data}
            styles={styles}
            l10nNamespace={l10nNamespace}
            l10n={l10n}
            view={props.view}
            display={props.display || (document.body.isEqualNode(element) && "page") || undefined}
            controller={cache.controller}
            className={props.className}
            customStyle={props.customStyle}
            customCSS={props.customCSS}
            attachments={props.attachments}
            onL10n={processL10n}
            onReady={props.onReady}
            onTouch={props.onTouch}
            onAction={props.onAction}
            onImport={props.onImport}
            onChange={props.onChange}
            onData={props.onData}
            onSubmit={props.onSubmit}
            onComplete={props.onComplete}
            onReload={props.onReload}
            onEdit={props.onEdit}
            onPause={props.onPause}
            onDestroy={props.onDestroy}
        />,
        element
    );

    return {
        get definition() {
            return (cache.controller[0] && cache.controller[0].definition) || definition || cache.definition;
        },
        set definition(newDefinition: IDefinition) {
            if (cache.controller[0]) {
                cache.controller[0].definition = newDefinition;
            }
        },
        get instance() {
            return cache.controller[0] && cache.controller[0].instance;
        },
        get fingerprint() {
            return (cache.controller[0] && cache.controller[0].fingerprint) || "";
        },
        get styles() {
            return (cache.controller[0] && cache.controller[0].styles) || styles || {};
        },
        set styles(newStyles: IAutoscrollStyles) {
            if (cache.controller[0]) {
                cache.controller[0].styles = newStyles;
            }
        },
        get l10n() {
            return (cache.controller[0] && cache.controller[0].l10n) || l10n || {};
        },
        set l10n(newL10n: TL10n) {
            if (cache.controller[0]) {
                cache.controller[0].l10n = newL10n;
            }
        },
        get view() {
            return cache.controller[0] ? cache.controller[0].view : props.view || "live";
        },
        set view(newView: TRunnerViews) {
            if (cache.controller[0]) {
                cache.controller[0].view = newView;
            }
        },
        get snapshot() {
            return (cache.controller[0] && cache.controller[0].snapshot) || snapshot || localSnapshot.data;
        },
        get isRunning() {
            return (cache.controller[0] && cache.controller[0].isRunning) || false;
        },
        get isFinishing() {
            return (cache.controller[0] && cache.controller[0].isFinishing) || false;
        },
        get isPausing() {
            return (cache.controller[0] && cache.controller[0].isPausing) || false;
        },
        get allowStart() {
            return (cache.controller[0] && cache.controller[0].allowStart) || false;
        },
        get allowRestart() {
            return (cache.controller[0] && cache.controller[0].allowRestart) || false;
        },
        get allowPause() {
            return (cache.controller[0] && cache.controller[0].allowPause) || false;
        },
        get allowStop() {
            return (cache.controller[0] && cache.controller[0].allowStop) || false;
        },
        start: () => {
            return cache.controller[0] && cache.controller[0].start();
        },
        restart: () => {
            return cache.controller[0] && cache.controller[0].restart();
        },
        pause: () => {
            return cache.controller[0] && cache.controller[0].pause();
        },
        stop: () => {
            return cache.controller[0] && cache.controller[0].stop();
        },
        doPreview: (data: TRunnerPreviewData) => {
            return cache.controller[0] && cache.controller[0].doPreview(data);
        },
        destroy: () => {
            ReactDOM.unmountComponentAtNode(element);

            if (props.persistent && isLive && typeof window !== "undefined" && localStorage) {
                window.removeEventListener("unload", localSnapshot.save);
            }
        },
    };
}
