export const definition = `{
    "name": "41 correct",
    "epilogue": {"redirectUrl": "https://example.com/"},
    "clusters": [{
        "id": "f8aaaf2eaa88991108a6d6c0c6e33339d29dd5a0d40d661fe555aba6014cd698",
        "nodes": [{
            "id": "740f48a60d767ef1d9c0833342c3f9dd943f5f8e698f7fe326bbd36a4581bde7",
            "name": "Du bist...",
            "nameVisible": true,
            "slots": [{
                "id": "414862bee363195ef3e158122b3bc6087a94f5542851a3aa353e18c8fc9d2627",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "ec2be855f0b93af51396f2d6c5a5b7626c8b184e708087a7e392e4e3ffeac773",
                    "name": "Eine Frau"
                }, {
                    "id": "a900143cbfeb9eb2f9b317ab556c2dd19336b2a588530b3696e5a714611fdf95",
                    "name": "Ein Mann"
                }, {"id": "b234cbe61bee3d852909529c461f58dc2042f9e423bb7ecad972737fa234b241", "name": "Divers"}]
            }
        }]
    }, {
        "id": "2ddeac9aff8a3fbd51622a0a7ecccf27fbfe13fc87b3c96c73d8b7276c66e2ef",
        "nodes": [{
            "id": "2aab9896d48f00a6101f1b3b1f4fb9a8594f12e06f2bfac4d513db82b2e27a7e",
            "name": "In welchem Jahr wurdest Du geboren?",
            "nameVisible": true,
            "slots": [{
                "id": "40e70fca63685d581416c898b966e63c3d7d9515df09ee0d4d618746cb74db86",
                "type": "numeric",
                "kind": "static",
                "reference": "number",
                "label": "Number",
                "required": true
            }],
            "block": {"type": "tripetto-block-number", "version": "7.0.3"}
        }]
    }, {
        "id": "f679fb9e23e3b2e5b9348c0d3471d65cdf6ba59e10280dd55f6d7d818e264e60",
        "nodes": [{
            "id": "36914499fb99e8b45b28bcfdcc1d9a00a7dd7e9d206fe3a4ee04babe3145afbb",
            "name": "Wie groß bist Du?",
            "nameVisible": true,
            "description": "in cm",
            "slots": [{
                "id": "917043e0269957468e12d6f0b44821c8eb012f252edc43656378992d48298859",
                "type": "numeric",
                "kind": "static",
                "reference": "number",
                "label": "Number",
                "required": true
            }],
            "block": {"type": "tripetto-block-number", "version": "7.0.3"}
        }]
    }, {
        "id": "ed572ef192e15ff3537e4d63f514f9e99b7512bffbca8eb38a9473debaab958a",
        "nodes": [{
            "id": "1e4f9c72c1817226370ed7b4074c0aa267fb517825f0501e2277aa445c071bd3",
            "name": "Wie viel wiegst Du?",
            "nameVisible": true,
            "description": "in kg",
            "slots": [{
                "id": "bed5b6fe16b74e77a3b93702480418cc19ab5dcae67b807b77642e7db10c8491",
                "type": "numeric",
                "kind": "static",
                "reference": "number",
                "label": "Number",
                "required": true
            }],
            "block": {"type": "tripetto-block-number", "version": "7.0.3"}
        }]
    }, {
        "id": "40eebcfc6437d041402f9e1f01efc2299e01ce87b4c0f450056fc82b40342f00", "nodes": [{
            "id": "eda798a7191ede3410005434576eaaf7448aebab8eab42d32091d0cde9a13186",
            "name": "Die nächsten Fragen helfen uns, die Ausprägung Deiner Verstopfung besser zu verstehen.",
            "nameVisible": true,
            "description": "Anhand Deiner Angaben können wir Dir zeigen, wie sich das Programm auf Deine Verstopfung auswirkt.",
            "slots": [{
                "id": "d25dc3440a7bb1dd82078cf19d437510ab03ff86e30c13c4a0a421002c0a371d",
                "type": "string",
                "kind": "static",
                "reference": "choice",
                "label": "Image",
                "exportable": true
            }],
            "block": {
                "type": "tripetto-block-picture-choice",
                "version": "4.2.1",
                "imageURL": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEWMl/AAAACNmPKQm/aMl/FfZ6RLUYKCjN8XGiyNmfKLle1wecAGBxA1OV2Pm/WSnfpqcrZ2gcxZYZqFkeZQWIoyNlYoLEdxe8RaYpuDjeEREyIkJ0BeZaJ9h9YCAAhrdbo7QWhDSXUtMU1HTXxTW5EMDRg7QGYfIjZkbawTFiQYHS5PVIcjJT8QERwfIjgaHi8ZMen4AAAJqElEQVR4nO2da2OiOhCGIUFxsCRcqmiVIkpdezzd/v9/dwISIAHRs6237jzuB4oQwmsymUwG1jAQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBDkG0AK4dT0eE4iec/YeuXVNHhI2MAs27NY1eUikfEN665o8JA35rFvX5QFB+b4Edt4vgfJ9CcCR9ytANNwLhsLvQ9t3JsDqtkYOs44bNT6Ah5vvAHV2H/zWtThAfNcn9HHavUW4vX8zzTuRD3zTXOwc+iBTRgqRWwwV3yWfc9YRR48iflGbfczuX0BCncGvw0D7P+WDzu5lGV8ebkr5TNMd33nUh9B4Y1acLZ8YWrgwl7zVv1ge5jo16ORn0/zsI0dV8pnm+zK8xz6cNxALGE1c0+yQj/ECWncwWuwQ9+uIcZH6s3QynU5Wgd9sHqIhe0N3vVhv997xu6Y83hVHuUMv5FBfriqpIV/ufMac3WETBDoP3kyzSz62+xgJXp6rWQedFjsGQj/mzN7rU54Ch8jy4m2jLNdvty0nP3s5Uo8CebmRLUtS5DPNdWLcmYDAuJ+qlTRTXzaYatJWKcAO9zyjBhuP1NP+iYt7I7DRytu3p3zAdi/aUauQ0eVhU8pnON5UPWiUle30LsidvIVawV/LhqNAW3NeXsrH6N5sMRYqE3vU2r8l2i1D6LbPfvW5Jp8lenO8edJk9hm7B1cQgM+f39W6bSNodrV2wErKx9P2/ZvmnBC7a7/W/kjYljgn2qnyFceycPdbPWzqkZuPw1bl5FV8tnrGUfkGz533v6bzt84v/Ob4AaHyo73Wm2lbvmK5yl9p5WXxTcdh8fMNtF476bDLR+WblCe5gRd5Wd06/PKLf7NdlASTuvBm8+O1Qdt6sT23x5q1tHVpCJ3PtN9lG/EbRdGA8HioVuZjb3PdQBk98h3Yh8LhI4TxsWqfXOFiUMIYjSuh4loRmlWiiosKbYgwwUp9WvLlArJxczwXjIQrePU+LJw8nmi9duE53Q5Br3xv/qH2jmVQxcPYVXcFlmyAg6qpkLhSv757iyb98uUnMjszFZ42NiVXHUYIDYMXrQ7H3dE++V7njUGGNm7Ma+wnYblzVXuOabkrUOY2NK5L6JIvvz5Q4tUGoUCYnCv2YYhT9fKjQd9kqE++pDlEw7wqccibIQBa9sqFvAiRR26122beidZ3OJ3FmqH8DMKrdWH4pVx65fdPSnvkc9UT2VqWScBp9CcYl7tlAbKdvoa6RryybT3y5R43DFRnOrta+yON4fY9m+edti+o1CNfwpQTmbT9+aFN+aQfWB1dDtP6VMRpGMVe+XIBiTJTCq4mH0j5XrdjejqK1iOfZrLl/MSM1EItQ5Wv0ihsm3wqm98J+YzChC+rlnAD+dw5P2MB47h8ay2mRcsJw6utGiIwnhT56Ozw55S3o4GV9TstX+5LJ/KXvIF8YszyjJOe+3H59JVfUtq4z5YoqnysbGFZ148nR5WT8gk3Ovu4Qedt2j5h/E6FII/Ltzwi30JrlZYmHy/vOumST37ZJ5+VTzfVSVxwpYVAyyDabGMV0b4I2nH59Iw/KZ+ryarJB0554bhLIeqelk9YvYEaQnhLrjb9tYTnrk6wfvdNfY7LF/2hfHLk6FSIbk7JR6g+3ZzunGsGDwgFPQa5iY81wT+RTzV+unzl7O4l7Lqc9AmPyAfU0icdqc+vPu9lTA8ATT2j04s5Ll+sVfpM+Uh0+Ou909tkQY98+XChRiffsvlt4n7qyJXzsY87Zt898v1Z6+uVz5KX65CPsUgLuEw964ZBU2rttD7sRqB7AJeT73913txJ/lQru4rZbVeNgLYWiUYzMYw0K/X98pW273XeVSX2rMuXF8a4r0UJ3oM5716bvypAQ82cCFvMaF2z75evf+RNW18Cba22rb27SbwS3dVba7XbOVUf/nb5DDkF9rvk42tNPsLjZ9VG52PtnWhXYFGqxwCfNlK/75ePl7HaQddEi2pN07I1P+U9CO8vW0iMw4H6G1dZBt8uHy1dprRDvlbP1rIM1t69JRnkWEUIMmn24cvJJ0t86shCkt91yveaxgzuT7wSi9HGOHw5+arwqd+xrie7qpSvThF6CW7kIZ+PGIeD0aXlq6L6q1bvrcXS5ZskN3byzkSOw5eUb9fd/CyDVuOEKt/GZ4/yXASwYhy+oHwWK3e8G2oRbGbq8gnb9xk8TGrzARDz4cs5LqKFl2lU5lSJNPF6nbJufbFnPFBifY5V+NIll5Cvjnj/tuu1c9JMIKjcZrjfsfYcLiIf1PkEzyGnLP8kSr7SGUtFD8FF5Ku7b96Dh8Es09PPUD5Jl3x1mouGDKygfJJO+YDr6c8Fe4bynSNfvareZEblMhzKJzkin8FCrQNPbCrzot86Q9EPCCuNfP04NC9zZI8tFU1afprZKZ/wjuygHm43RaplKV/3MtwDIvzWgnqCRZLDnlZOnX3YH7UctcN+r6NwxsHPixvbh0eSZMDq14959hpIQUMTgMMO/Q7bR5Yc9ndZM0ucBI0vZXxq8dPenNDU6tRDpqdaTltIeQYp85v1vFOkQeyIaUZnGEAGDToe4kIOWMan+T7ZLMcd+skMod0P8VsugcwwbGeXVs9z/RS37xLIoKjHdCMqH5N7u5M3Kdwl8knMdSshpMzfQNPXB8jHh9SUWqt+MEn3yJEGllwLN/dGldMFlFST4A02vj5YFe37CGKDU8q5ES+rfNsPsE6/vuRvBhopP2+LyWr9b/NZU+y6JyCh9nh9kxi77inIfHpEvIXdcmeQFkCyTvUCAqjeObTzMvN3jGDHPRdCiZ9t5Xj7axv4rcRqpBdgFBzHtm0nf5kVnPG6NUTHwvAAgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8rfxUx7GvDCWug3Fv/z/QQrl20uAQLmvPAyzphs4juFA8WiXQ8SmUSSmhjSKwWEOQAjOiooj8ldtUyj+dwuUrwGk9taeRs9R5pK1M6R+uo4Xm2ESuekqHQ/2q/GLv13FAOkq2af7yF2lq5/ymPrXATYMJlm032bD5XIaeHwT7vwJX3nj1EnD52i5CNNsn2Xcn3E/5atdMoiWna/8/CuxiDfyRnyynA5sMzLD+DnaC/nSXL7M3k/iie3OZkkS+2mcufPJzg/8QH/X+V+LsGNhEkY0sqO54TniQ5apn9BxbI8dP/SjzAuXdhA4ieVlTjSMY9sXn1tX+54gQPKXhEG+ITZp5FOxmWMBYRTEh1kkf6MZofk7GKyONy0gNajOl8Dc/K+BUw4E+dn8B1cekPq/8hwOAAAAAElFTkSuQmCC",
                "imageWidth": "",
                "imageAboveText": true,
                "exportable": true
            }
        }]
    }, {
        "id": "d4d5ac05cc5305d9439a1617856737726bd66246bdfa452a8adb75cc162fb3da", "nodes": [{
            "id": "60ffa5516cabbf5c54e4faf9779ec5b3a6d7436696dbb49af63acc4bb21de7d8",
            "name": "Was sind Deine Ziele mit Apriwell? Welche Verbesserungen strebst Du an?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "3f92d883de55b6288ddeca3ad2017440791bede28ee2b74961a44bdfbb1d98f5",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "d24df9c044f2bc8e46b76ccab7cee95a940fb778fb7a15fb811e3f1fd29f1701",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Leichterer Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "d2f19787169129b7a6def0af2710522c5411b49c0a783040c4c60f38a2a28f0c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "6fd289ef74212dbd58e80bf0fd8268731d8a99ec2c2e7e8fe495bfa563a4ec84",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Häufigerer Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "336c220bbfb81cc5f1177255374928c48976288d50d4de457add5abbe0af9fba",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "03046b653b0f513c3db32ce0b992c0a274e4020d1550de7d7c87820f0ca098b6",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Weicherer Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "52af3af114cabd7a780ceb0db23d2d105b23d25f70f6edfa563da9a830f7fed0",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "3f5c84522dc989af127b48ac80edd90ac170d6fd8c30585d2afcf4db36ad7d78",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Weniger Zeit auf der Toilette",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "e09f0b50fc90ce524c168687890b3e193bc6e12b3a4477d7825188d39992d529",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "c09a36ca4442610165b3018b664dbf317739e0c367fb386b86935c98fee3764b",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Besseres Körpergefühl",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "efee729c41dbfbab5348a81bffc006ea42e2c75dcef2416dcbb9bdf7a9d345bc",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "5ef4a0b10eafd605394d31803948a2d7c32562749554d7298e9c2240d5ce793e",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Weniger Blähungen / Blähbauch",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "b31d4c508a4f44a2a38d73d4c3a03fb13e8b7e6871ea4ec1d458f3754b083064",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "9e02522e6433180ea079993865e72db0476a2ba00c0fcef9c471df630b5fa492",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Weniger Abführmittel",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "29b73a66aae05c7093bc8d26701a71b59eb7a1f965cefb73b5bc6a310cf686cb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a6e628e43f8713b8330d05c599a51305dc990b7bdaf96540c47d01d08e7fe690",
                "sequence": 7,
                "label": "Checkbox",
                "name": "Weniger Schmerzen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "744a9062a2fa53d38f8910b6f3f2b2973153b289d99385db0ea463453c07173d",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b97b3f58cc37cf01c1e22f22f769840dd224af80a8c3a547fac6b19f2883a4cd",
                "sequence": 8,
                "label": "Checkbox",
                "name": "Bessere Planbarkeit des Stuhlgangs",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "6d3d0e7cfda2fa647b1f30bf111501b984d3062718570d6684991e0ceab69fe4",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "e4014cbf61c08323bcbfe1de4f0468a280703e623702320d5b6d5343df1e35b2",
                "sequence": 9,
                "label": "Checkbox",
                "name": "Etwas anderes",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "34b95ec906744009c0fe97b22bfb6bfc8f866ece5082119d460115b23040f45e",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "d24df9c044f2bc8e46b76ccab7cee95a940fb778fb7a15fb811e3f1fd29f1701",
                    "name": "Leichterer Stuhlgang"
                }, {
                    "id": "6fd289ef74212dbd58e80bf0fd8268731d8a99ec2c2e7e8fe495bfa563a4ec84",
                    "name": "Häufigerer Stuhlgang"
                }, {
                    "id": "03046b653b0f513c3db32ce0b992c0a274e4020d1550de7d7c87820f0ca098b6",
                    "name": "Weicherer Stuhlgang"
                }, {
                    "id": "3f5c84522dc989af127b48ac80edd90ac170d6fd8c30585d2afcf4db36ad7d78",
                    "name": "Weniger Zeit auf der Toilette"
                }, {
                    "id": "c09a36ca4442610165b3018b664dbf317739e0c367fb386b86935c98fee3764b",
                    "name": "Besseres Körpergefühl"
                }, {
                    "id": "5ef4a0b10eafd605394d31803948a2d7c32562749554d7298e9c2240d5ce793e",
                    "name": "Weniger Blähungen / Blähbauch"
                }, {
                    "id": "9e02522e6433180ea079993865e72db0476a2ba00c0fcef9c471df630b5fa492",
                    "name": "Weniger Abführmittel"
                }, {
                    "id": "a6e628e43f8713b8330d05c599a51305dc990b7bdaf96540c47d01d08e7fe690",
                    "name": "Weniger Schmerzen"
                }, {
                    "id": "b97b3f58cc37cf01c1e22f22f769840dd224af80a8c3a547fac6b19f2883a4cd",
                    "name": "Bessere Planbarkeit des Stuhlgangs"
                }, {"id": "e4014cbf61c08323bcbfe1de4f0468a280703e623702320d5b6d5343df1e35b2", "name": "Etwas anderes"}],
                "required": true
            }
        }]
    }, {
        "id": "608dcdc9c1b46916135903febd4c276cfc61976611a6f2b80119f4ca90131c49", "nodes": [{
            "id": "ad2977c5a718ab94fd8bb6c2d16719547ef4c8feda3be47487ea46bf4b81fc25",
            "name": "Was wird sich für Dich verbessern, wenn Du die eben genannten Ziele erreicht hast?",
            "nameVisible": true,
            "description": "Nimm Dir einen Moment und spüre, wie es sich anfühlt, wenn Du Deine Ziele erreicht hast. Wie sieht dann Dein Leben aus?",
            "slots": [{
                "id": "8963c27cad8fbdc5594021d6046872b443033821061a7b0ed2592897222bf071",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "66ca7f0159808c9e2330bca095cf9b090ad0192c1c4d659616297b8ad381688a",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Mehr Zeit für mich",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "722d6f3142f1ad6c6d95f981479f8c949dc81f108e87eba210d6022c6e193ddb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b2efc0d508429835dbd546a4d25c46423ea431421fe3cafab309134a5342ce96",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Bessere Planbarkeit des Alltags",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "b3fb906084dc0a5a8af8d6e23cffab9b7a54e26b3c91b6c9d8baa53e87c9d09c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "4fef601c432759b8a4408232fa8b790cb2f0085f0c61ebf201e2156aa912bf15",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Mehr Freizeitaktivitäten",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "194860084ff30c48c47b49239b12f57a6a6ea850df99f75ea65d9f93e28c2acb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "f85ab18d665f4081e260ce53ebcdb57374ea7c785ac16b803477c29db0383de2",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Insgesamt mehr Wohlbefinden",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "4d527862d5fa3cd6e006ad975c92b34bf3298c5227b6723bac939a96d954269c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "734822b45c381cc86dc2384c18d7b8265516c8eb1527aff883b11d410d9935fa",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Weniger Gedanken an meine Verdauung",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "a3fd53cbc31a0f4dc993e28a4deaf44bce34312b979dad79f87b6772f5149ddb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "0894de3e888c5f861edaa4049a6dc92abfa2683ca77d9037c0e8341ac1a652a6",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Etwas anderes",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "fe25366fd0b8917a73e5fd91ae71a9dd1896e78ce94e0391bd9131deec1c2dee",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "66ca7f0159808c9e2330bca095cf9b090ad0192c1c4d659616297b8ad381688a",
                    "name": "Mehr Zeit für mich"
                }, {
                    "id": "b2efc0d508429835dbd546a4d25c46423ea431421fe3cafab309134a5342ce96",
                    "name": "Bessere Planbarkeit des Alltags"
                }, {
                    "id": "4fef601c432759b8a4408232fa8b790cb2f0085f0c61ebf201e2156aa912bf15",
                    "name": "Mehr Freizeitaktivitäten"
                }, {
                    "id": "f85ab18d665f4081e260ce53ebcdb57374ea7c785ac16b803477c29db0383de2",
                    "name": "Insgesamt mehr Wohlbefinden"
                }, {
                    "id": "734822b45c381cc86dc2384c18d7b8265516c8eb1527aff883b11d410d9935fa",
                    "name": "Weniger Gedanken an meine Verdauung"
                }, {"id": "0894de3e888c5f861edaa4049a6dc92abfa2683ca77d9037c0e8341ac1a652a6", "name": "Etwas anderes"}],
                "required": true
            }
        }]
    }, {
        "id": "9b3332f251c3406de9fc97b3a1c69bd5fa21f4b3a0293c5efefc3af63c4ea1f2",
        "nodes": [{
            "id": "4b28be8779ffe5746201045288f8009d48c4f7ed8c0c98485488ab6327276fde",
            "name": "Wie lange leidest Du bereits an Verstopfung?",
            "nameVisible": true,
            "slots": [{
                "id": "e45d0f9f29227476efafdacb18871ae0a72e2b75ab1ed390b45978f9ac3efc50",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "cdb333068765e0e6a601318568eb5c4b5ef8fbea91e534445aa5bff9f2cb47f7",
                    "name": "Weniger als 3 Monate"
                }, {
                    "id": "f10b6ed06b398aa9181213ac7e2c097f627aab0f0a4364687184bb86b0ee6aa8",
                    "name": "3 - 12 Monaten"
                }, {
                    "id": "3696e3ee51540a056f6513ff93ea0a99e3ebb83013034d4a237bc2076621fd99",
                    "name": "1 - 5 Jahre"
                }, {
                    "id": "3d547c92d540906f5842031805c61a53b7db37b836322daf4e7a69ba7dbe5e1d",
                    "name": "5 - 10 Jahre"
                }, {
                    "id": "099e095ee054944232489125ff064c1a6858aa9452ea87d600365f7845935792",
                    "name": "10 - 20 Jahre"
                }, {
                    "id": "e57f3e049593ba7409b12ef86a1e7ac29e459ed5c2c67c21f4435bb9af918746",
                    "name": "Seit mehr als 20 Jahren"
                }]
            }
        }]
    }, {
        "id": "ffb6743fb238d26de3d765c21fc011762c1710031b0f85d4a76efc8262065d86",
        "nodes": [{
            "id": "062c12a327e22505e4c64d3707bd39761dde8ebc60182c39de8ad67b6d11b67b",
            "name": "Wie oft hattest Du in den letzten Wochen Stuhlgang?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 - 3 Wochen.",
            "slots": [{
                "id": "df0f4a9351c15fd4aa05aa413d1b1e0f64c415c7a7406744df44e6343f4656bd",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "4bac5acfed2690cdf7d68a170f6e0e08860b3da99f80b8521676c0da20d9bd44",
                    "name": "Alle 1 - 2 Tage"
                }, {
                    "id": "79f8797641246c36bee076752a8829cf4f3b16ec48c1f44aebf413746361f342",
                    "name": "2 x pro Woche"
                }, {
                    "id": "1b43c649378d895b7806c585a6c51ce451f4a0560e4c130c1656d69ccb1e79b2",
                    "name": "1 x pro Woche"
                }, {
                    "id": "eb6fa97c9f06e04fee0c2c9c3249ccbe62dd4d1e6c00037126bf597a9f8f712e",
                    "name": "Seltener als 1 x pro Woche"
                }, {
                    "id": "e751aca198d12122f04df693423ce8f9019679addd2e0b2ba12bd08311cbc46b",
                    "name": "Seltener als 1 x pro Monat"
                }]
            }
        }]
    }, {
        "id": "d50fd34054366ab2da9b1d2a920a5044916d9219970cdd1c85a5384b58e753e1",
        "nodes": [{
            "id": "3148f18d65adecadefa6ad6b048c39558d7de74f5407eab85f0bf5b3cb4ddb8d",
            "name": "Wie häufig hast Du Schmerzen beim Stuhlgang?",
            "nameVisible": true,
            "description": "Zum Beispiel, weil Du sehr stark pressen musst, der Stuhl sehr hart ist oder es beim Stuhlgang am After brennt.",
            "slots": [{
                "id": "7bc6f29eb1877055d4c9a386197b40c10652746cef34242617673aeb3574cbec",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "a72d7a80e50a7116b2a409606089c95db4161d121cb29bcf577e6165f064d939",
                    "name": "Nie"
                }, {
                    "id": "b995b930e6d801be72116454c1ac0b3f91d8ce6d89fcbea51793b050b72a57dd",
                    "name": "Selten"
                }, {
                    "id": "e46d467197fb9cadf84c6f58111ebb9b9e88e91017248a62fbeb74fb1f4dc660",
                    "name": "Manchmal"
                }, {
                    "id": "d5131330290d64f27c905a723a82b16c90df0859c804dd83063c717dfdda4779",
                    "name": "Häufig"
                }, {"id": "df26e734fc7daca939ba46521a9e6c240f9f819815058e94fad2b3ba6840be06", "name": "Immer"}]
            }
        }]
    }, {
        "id": "011044dc104555f32d8b829146f8ac49362258fc77cfdb25bb34373307f492df",
        "nodes": [{
            "id": "06e8528969b14b3dd352d2a0b64e90d9d2b810d27b45c6f968338164c5c9796f",
            "name": "Wie häufig hast Du ein Gefühl der unvollständigen Entleerung?",
            "nameVisible": true,
            "description": "Das Gefühl, dass Du mit dem Stuhlgang noch nicht “fertig” warst oder noch immer etwas festhängt.",
            "slots": [{
                "id": "dc15892f05fd11d8d44416fe8b72ebf390cc212f286fc52cd9d7cd89b36c2aaf",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "a72d7a80e50a7116b2a409606089c95db4161d121cb29bcf577e6165f064d939",
                    "name": "Nie"
                }, {
                    "id": "b995b930e6d801be72116454c1ac0b3f91d8ce6d89fcbea51793b050b72a57dd",
                    "name": "Selten"
                }, {
                    "id": "e46d467197fb9cadf84c6f58111ebb9b9e88e91017248a62fbeb74fb1f4dc660",
                    "name": "Manchmal"
                }, {
                    "id": "d5131330290d64f27c905a723a82b16c90df0859c804dd83063c717dfdda4779",
                    "name": "Häufig"
                }, {"id": "df26e734fc7daca939ba46521a9e6c240f9f819815058e94fad2b3ba6840be06", "name": "Immer"}]
            }
        }]
    }, {
        "id": "a45a27ef98c722a8292e403fa075cb783d9029a4a16a3468c72ec3f833d1d4bd",
        "nodes": [{
            "id": "45698770fc7b8e33ff7c42e50810bba4f113fb7c450f438277c566366a4a6538",
            "name": "Wie viel Zeit brauchst Du üblicherweise auf der Toilette?",
            "nameVisible": true,
            "description": "Gib die Zeit an, bis Du mit Deiner Stuhlentleerung fertig bist.",
            "slots": [{
                "id": "5978d4e3aea63859b5277d5d623097c9c6bf9027b87d63eed1285751ad4e2261",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "0b29ce0d65261b1ee8e086a9fe40e2418899bd3ddf00c19303dbd9d6875532d0",
                    "name": "Weniger als 5 Minuten"
                }, {
                    "id": "6e25fdee517aee9d61f5ae3a64e1faf4ec265cbc586273748f45b053f193634a",
                    "name": "5 - 10 Minuten"
                }, {
                    "id": "ebc12ed999e99a14779d45c8849185b148dcd683840f863eb2b44aaf6f44fcb3",
                    "name": "10 - 20 Minuten"
                }, {
                    "id": "f433ff5eb67398cd19480e63b3eafdff2db319809e3ee8f3b81050bd32786e31",
                    "name": "20 - 30 Minuten"
                }, {
                    "id": "976e33e45c3568e0a2cc014c7efa0b179e70d19c70872365883f5d6468cbd9b5",
                    "name": "Mehr als 30 Minuten"
                }]
            }
        }]
    }, {
        "id": "3994f9dec3e8ba4437cd7be5d006ec58f8043d626cdb101710f86c428ef0cefe", "nodes": [{
            "id": "217e994361f8570fbaa266dbffeec41b2db05dceda4c5908ad7229d3f5e1b15a",
            "name": "Musst Du Deine Stuhlentleerung unterstützen?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten.",
            "slots": [{
                "id": "28308d03a8ab8eb1813a33f4d7ae050d4aa3cc9b8b5f853306fbf52da3edf66c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "67d717f1565aec7789e97a623979e8c603cfd4fdefb234d48459005fe6f05e17",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Abführmittel",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "76e0eed58cbafe1c6b3a0e303fce9afc766141b706f9e5c275ad8dfa24dd4b3b",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "79a61bf59f5173ba4b72635c42371c55680bff9bf55976afb3d29d67af181b18",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Einlauf / Klistir",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "f261fd33be8cdf831d3cb2d416200bac55f5c3aef05f9043253015ad9931049e",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "4ac523a77c81d413380a6baa40fd8c5b07fbc3af9dd6e0ef7e614103b686bcb7",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Heftiges Pressen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "d636f38f3e08cb8c7c70ede8a207ad8bc286b3ec68c0edd83dc6ecd0af69e524",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "29a58648a00695ec148934d076f17db9e1b3603778bc05eb9099c4f650a24b01",
                "sequence": 3,
                "label": "Checkbox",
                "name": "\\"Finger\\"",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "92bebea5609d4547ac64a3b6ac10a1a43fb97f2b7a62d9899471aad106ba7748",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "8908348e27bb79c6fc343d51d256b7a73b42ba0af35ca725edf89c2a09c56f2a",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Nein",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "44680fb17b21924973b6569f7aba50d3f6bcfa0b07005d93f3f7f3e9c0c661c6",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "67d717f1565aec7789e97a623979e8c603cfd4fdefb234d48459005fe6f05e17",
                    "name": "Abführmittel",
                    "description": "z.B. Mucofalk®, Movicol®, Dulcolax®, Bifiteral®, Iberogast®"
                }, {
                    "id": "79a61bf59f5173ba4b72635c42371c55680bff9bf55976afb3d29d67af181b18",
                    "name": "Einlauf / Klistir"
                }, {
                    "id": "4ac523a77c81d413380a6baa40fd8c5b07fbc3af9dd6e0ef7e614103b686bcb7",
                    "name": "Heftiges Pressen"
                }, {
                    "id": "29a58648a00695ec148934d076f17db9e1b3603778bc05eb9099c4f650a24b01",
                    "name": "\\"Finger\\"",
                    "description": "Musst du mit dem Finger nachhelfen?"
                }, {"id": "8908348e27bb79c6fc343d51d256b7a73b42ba0af35ca725edf89c2a09c56f2a", "name": "Nein"}],
                "required": true
            }
        }]
    }, {
        "id": "3c049d3a67bd6f294cbb369613f23545ccd732663aceb6b7dd5533a642ef5189",
        "nodes": [{
            "id": "dafa4633148a6909ec006b9cfee3964b09baa01ea65dbb9fac773bac3c80fdf6",
            "name": "Wie häufig gehst Du pro Tag ohne Erfolg zur Toilette?",
            "nameVisible": true,
            "description": "Weil die Stuhlentleerung einfach nicht klappt.",
            "slots": [{
                "id": "ae2e4d6019b0bfd8c051934f5b2a8575506cb040c88e6ed3fed903d29d2b8be7",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "cef610d8d8ca2b21880ae26594d4a92960e734bdd97fc58392ca32305c7c02f7",
                    "name": "Nie"
                }, {
                    "id": "489782e54c44b46e192d88bacd7f75b95e4fd87fa83871aed6da6207a0192b66",
                    "name": "1 - 3 Mal"
                }, {
                    "id": "8dd5f53eefe449c187fdbc5b4b18ed9aefdfc069fd124ed78e43dd233efe1a27",
                    "name": "3 - 6 Mal"
                }, {
                    "id": "7382900f6a1048b245e2b4084ec9c6c6801c0a791f8b1ee5df1a89c0ec9d1443",
                    "name": "6 - 9 Mal"
                }, {"id": "692e432dfbe0864fc525a1028ffb9809ebe8de71e958610f140982e634104598", "name": "Mehr als 9 Mal"}]
            }
        }]
    }, {
        "id": "4b171e11552ebc6fbbbdb310e4d690c4949cd9470c0b6b7746cc716eabb991c7", "nodes": [{
            "id": "82d5cf92cb2cc53981773cfbde5af55335da9bf79cd9695a960ec34d46d403ae",
            "name": "Wie sieht Dein Stuhl in den meisten Fällen aus?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 - 3 Wochen.",
            "slots": [{
                "id": "2d7f8340a73975cdaaf5c0951c2c7b13f946edaeeb2f13c3c4a46f150ffabd41",
                "type": "string",
                "kind": "static",
                "reference": "choice",
                "label": "Image",
                "required": false
            }],
            "block": {
                "type": "tripetto-block-picture-choice",
                "version": "4.2.1",
                "choices": [{
                    "id": "504910f5b4145a5e1ec0da13aff10082fb5a13f84ac85e37e7de9851956aa4aa",
                    "name": "Typ 1",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Einzelne, feste Kügelchen (schwer auszuscheiden)"
                }, {
                    "id": "2cb574c009a2cb3b47fc43fb7c6b8d93342b7fce3cd09e56677c92e29f681b3f",
                    "name": "Typ 2",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Einzelne, feste Kügelchen (schwer auszuscheiden)"
                }, {
                    "id": "3027a1aa73ec9809bdc3f906fcf85d4dcb8dbdd8847da8c942ab3b0512c22cea",
                    "name": "Typ 3",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Wurstartig mit rissiger Oberfläche"
                }, {
                    "id": "bae21d33aaff4a44dc8b32a73dc5fb50973417f2829ae131b3af9600c1766bd9",
                    "name": "Typ 4",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Wurstartig mit glatter Oberfläche"
                }, {
                    "id": "f62f28a6ee23c4ce40684e888a6a9c6eb91a5b0def4003887e8df1c9dc8a5ae6",
                    "name": "Typ 5",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Einzelne, weiche Klumpen, (leicht auszuscheiden)"
                }, {
                    "id": "6d7f42b289edf0a6c001f789e4084dee2190517353de90760637b5332fa40529",
                    "name": "Typ 6",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Einzelne, weiche & unregelmäßige Klümpchen"
                }, {
                    "id": "62e2412e52e81f2316339cc450bd650f9f196a3c64674f70a7adb76733d0497c",
                    "name": "Typ 7",
                    "nameVisible": true,
                    "emoji": ":|",
                    "description": "Flüssig, ohne feste Bestandteile"
                }],
                "required": false
            }
        }]
    }, {
        "id": "ea8202aa64f7277c57caa63cec89f4d45230ec00740326923471225c6ae85bbb",
        "nodes": [{
            "id": "44fd589a29bc1c94a033a1a4ebabc769236a64e06453da452340f0bc1dd50285",
            "name": "Hast Du abwechselnd Verstopfung und Durchfall?",
            "nameVisible": true,
            "description": "z.B. häufiger Spazieren gehen oder Yoga Übungen durchführen",
            "slots": [{
                "id": "38efa391043b275cbec160d88ea4839686dde7a00001d8873f4482d49c025621",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "f39165bcd565b9e68e7e170860e142bb6b452dd57c6eb5ec05a2bfe25e9aaf4f",
                    "name": "Nein"
                }, {"id": "9cf5fbf642012374c602c9d73c994d0c46d40948b24e151c1452a11eed02b738", "name": "Ja"}]
            }
        }]
    }, {
        "id": "c217d31b373f9a9bd7ee95fecbcf9a64315e91723a136b51fd3e010cfdf44e71", "nodes": [{
            "id": "fd0f94361d0373f7bcb55911cd187c4e0fc0d8c1df95c5871dd559215f441c42",
            "name": "Welches der folgenden Symptome belastet Dich am stärksten?",
            "nameVisible": true,
            "description": "Wähle Dein Hauptsymptom aus.",
            "slots": [{
                "id": "ed0ba24971a4163f9a69c966c5b779658e23aaf6365678afd8351578950c4eb1",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "5f0a3b1462ac4178ae333596f3f474df6954bd849ddc0027b9013538af2ec4b6",
                    "name": "Bauchschmerzen bzw. Unterleibsschmerzen"
                }, {
                    "id": "c90911d4955f3504f696841b95f5ac2d7e8ee01ae74fdef8926882abb92b2c6a",
                    "name": "Blähungen / aufgeblähter Bauch"
                }, {
                    "id": "16b9038e4516f247acb8d7bad57b8e16bc8b7e2ec0c8666201c0a8cb1472c132",
                    "name": "Seltener Stuhlgang"
                }, {
                    "id": "d9da98c11e32f3eea5af17a58b141927cc74159092191f79cab2186f4dd50345",
                    "name": "Schmerzen beim Stuhlgang"
                }, {
                    "id": "d4fb35af5d6cc36bcbd548d17dda385ad28b9647e7c12da0051be7e4892368f0",
                    "name": "Gefühl der unvollständigen Entleerung"
                }, {
                    "id": "9dace0f0c6077c1056083c5aca857926938976ba79dc7f29cfd9caf11be39455",
                    "name": "Völlegefühl"
                }, {
                    "id": "9772bce7ea95e29d32bf427f16a3ca28e8bce021159fcd2a26123cbdd9648d86",
                    "name": "Plötzlicher Stuhldrang"
                }, {
                    "id": "4f9feed0fc8990f3108f37ff178f65244f03b4bf5cc773fb98473498875abda0",
                    "name": "Mühevolle / langsame Stuhlentleerung"
                }, {
                    "id": "8eb64620ac4f589b1d0ddfc29d06047e2a947765230dbe68030f8697018a09ea",
                    "name": "Zu harter / trockener Stuhlgang"
                }, {"id": "5090ae13dccba18f6018c242b6f18eb39d5a2157ef5d1a0e6f06858d5081d6fb", "name": "Etwas anderes"}]
            }
        }]
    }, {
        "id": "50ee2c2bfa0e5e6c9a224318111684731e99f2ccad0b38f5b7d4d43660e0ff64",
        "nodes": [{
            "id": "a8dae024b076e7e49b9003daa7395c2c1912341097e017a8273ab24e7428acc9",
            "name": "An wie vielen Tagen empfindest Du das ausgewählte Symptom in einer üblichen Woche?",
            "nameVisible": true,
            "description": "Diese Frage bezieht sich auf die vorherige Frage.",
            "slots": [{
                "id": "ea3464f45a44cb80d6d0926dfe7cb93e90c7c2857a2f6c97d2d48e319b6717c4",
                "type": "number",
                "kind": "static",
                "reference": "scale",
                "label": "Scale",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-scale",
                "version": "3.0.2",
                "mode": "numeric",
                "from": 1,
                "to": 7,
                "stepSize": 1
            }
        }]
    }, {
        "id": "f47b262e52ac49a84970fc1eebf9ce5f0b5c4c4a99600de575bec2936a6e6bd4", "nodes": [{
            "id": "4a95a7c1ff8f11712699add4a3bdf2341c122f0efe33156c24c4d891317bfdc2",
            "name": "Welche der folgenden Symptome belasten Dich gar nicht?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "cb29b3b18b2d29276a85a5eeb9ae90a68ccc14d87be4f42516c8659790a79051",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "279d99cf769dc377dbc6dbffa572b9e811bf12e3a0367eecf00fcc0e2d1aea27",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Bauchschmerzen bzw. Unterleibsschmerzen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "0e2e73175f1db8ea16a790f5b4e970a651427be33c4f337a896f5c4e8ed320c9",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a4bea140f1029cf75ac0cc42417ef69eb0a8c22e8c0898c5de07bb9944406022",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Blähungen / aufgeblähter Bauch",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "3041061ea5aa21629ae9d7665abaf677508512fda6f142361449a87974a1ba9d",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "de8312496150084a796c4b844dc197c05360a976d6840375d5c8ae63ba137d2d",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Seltener Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "e92dd40584b22ffce977519337c75701f874f55a0d186277989d08f26ae839b2",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "da0a1a88da46ebf19c5ce053526fc349201b0a92518982ed93d08c6436e57b4a",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Schmerzen beim Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "d20e4a793a1041148897e291942778d775da7665f0cba7fa63793435a82945f1",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b84c4e8b307cd096ccaf8847408ab260d4cd8c6171e487978644990e07764936",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Gefühl der unvollständigen Entleerung",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "1545847ce87e5e907f4782652a74218927b8ca5485d169149cdc5e650cb72fc2",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "1cda2adb8a9b70b492d78d81d9751b59595a917241b4124aa0ef8fcd7dc072a6",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Völlegefühl",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "2376a5858d91e2e98950b51da2ea2cec59701a6d45be21ed86b53d321fb24920",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "1b1d6cdd2b64e82c05a7c89ebb39fb4361fd1c61b8036bc7f60340f6ed1e5fbd",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Plötzlicher Stuhldrang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "f389625470167fe56412a57dda5c9729e0598de7ef2e434783769c43d7beb8bb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "84f9b0ffd1493c25e0ab4f81cd4653475ec3524cf82a894179b694174dc13d52",
                "sequence": 7,
                "label": "Checkbox",
                "name": "Mühevolle / langsame Stuhlentleerung",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "750f1334edc51fe5ea1d30e146d1bf376d5e096185f4cc0cd26d5710dab55098",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "64ad25472101a74e2844058d8226910b75bf1584474ff3e6773b8c315b0004ac",
                "sequence": 8,
                "label": "Checkbox",
                "name": "Zu harter / trockener Stuhlgang",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "df3e075a393cabecbd2d6f8783384b459292d2852b58388b808a9196d08efd72",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "08e2347ca68ded00dcb5110f751f5b851c04945af31bd2f33d10ef1512969775",
                "sequence": 9,
                "label": "Checkbox",
                "name": "Alle Belasten mich gleich stark",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "be8088e9621dda926d2bc6c19d7f49ca2761446f1b6e3e17449a3a53eb095fd4",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "279d99cf769dc377dbc6dbffa572b9e811bf12e3a0367eecf00fcc0e2d1aea27",
                    "name": "Bauchschmerzen bzw. Unterleibsschmerzen"
                }, {
                    "id": "a4bea140f1029cf75ac0cc42417ef69eb0a8c22e8c0898c5de07bb9944406022",
                    "name": "Blähungen / aufgeblähter Bauch"
                }, {
                    "id": "de8312496150084a796c4b844dc197c05360a976d6840375d5c8ae63ba137d2d",
                    "name": "Seltener Stuhlgang"
                }, {
                    "id": "da0a1a88da46ebf19c5ce053526fc349201b0a92518982ed93d08c6436e57b4a",
                    "name": "Schmerzen beim Stuhlgang"
                }, {
                    "id": "b84c4e8b307cd096ccaf8847408ab260d4cd8c6171e487978644990e07764936",
                    "name": "Gefühl der unvollständigen Entleerung"
                }, {
                    "id": "1cda2adb8a9b70b492d78d81d9751b59595a917241b4124aa0ef8fcd7dc072a6",
                    "name": "Völlegefühl"
                }, {
                    "id": "1b1d6cdd2b64e82c05a7c89ebb39fb4361fd1c61b8036bc7f60340f6ed1e5fbd",
                    "name": "Plötzlicher Stuhldrang"
                }, {
                    "id": "84f9b0ffd1493c25e0ab4f81cd4653475ec3524cf82a894179b694174dc13d52",
                    "name": "Mühevolle / langsame Stuhlentleerung"
                }, {
                    "id": "64ad25472101a74e2844058d8226910b75bf1584474ff3e6773b8c315b0004ac",
                    "name": "Zu harter / trockener Stuhlgang"
                }, {
                    "id": "08e2347ca68ded00dcb5110f751f5b851c04945af31bd2f33d10ef1512969775",
                    "name": "Alle Belasten mich gleich stark"
                }],
                "required": true
            }
        }]
    }, {
        "id": "28ad83c9c743ebf3f26c3779135d16389f3513356bc220d90397f94459bb11a4",
        "nodes": [{
            "id": "631eee35f4474e4fafed06840c0830fcd8c48da513e463b9d2d05abfe07e5e3a",
            "name": "Die folgenden Fragen zeigen, wie sich die Verstopfung auf Deine Lebensqualität auswirkt.",
            "nameVisible": true,
            "description": "Sie geben Hinweise auf mögliche Ursachen und helfen uns dabei die richtige Lösung für Dich zu finden.",
            "block": {"type": "tripetto-block-paragraph", "version": "4.0.1"}
        }]
    }, {
        "id": "18db94a7c680504f41ecbf1ef956c3cb2bb7718ad35919827f0d3471596cde51",
        "nodes": [{
            "id": "5a2aa19f84a2ac129231139345c1a37a0fb9c27758671ba9de080c3b4cf9a114",
            "name": "Wie häufig ist es Dir wegen Deiner Verstopfung peinlich, mit anderen Menschen zusammen zu sein?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 Wochen.",
            "slots": [{
                "id": "2adc0e7c79fe8106ce163b52b5e389b98ff5e765f809c48fb6491d95da986d58",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "f3d61cfe37dee49d7975cf39ea20785ae58cba6e10d190a993cf2e3200ab41e7",
                    "name": "Nie"
                }, {
                    "id": "bec6991dd46451fde69bd72dd8d614fa831a832b8d2343605b72d2f098185673",
                    "name": "Selten"
                }, {
                    "id": "adc9eafa8577e4e167b9005ab600fc41005372eb74c0b0bb1548d62e7299dc75",
                    "name": "Manchmal"
                }, {
                    "id": "dbbd589d41083238669ccc191a261fee32d68bda88057203265b183747b1a8c4",
                    "name": "Ziemlich oft"
                }, {"id": "51f67e2edbb6e4b5f7b7659cbf9bf445160378b39c42db4186fe61c4c593dd6b", "name": "Sehr oft"}]
            }
        }]
    }, {
        "id": "0a2953ab6b9e0dc101166738d724e79b0c11173907bf952d70b0796a2d7df6d5",
        "nodes": [{
            "id": "a646be28484eca4743afe1bf0a7128e078ce77dcb45b21dc6539137e30fb1217",
            "name": "Wie häufig fühlst Du Dich durch Deine Verstopfung gestresst?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 Wochen.",
            "slots": [{
                "id": "c4cbbd0171f23c56330a326e110656298c6ebcccb4f9b5c8684f4d1a4bd09fb1",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "f3d61cfe37dee49d7975cf39ea20785ae58cba6e10d190a993cf2e3200ab41e7",
                    "name": "Nie"
                }, {
                    "id": "bec6991dd46451fde69bd72dd8d614fa831a832b8d2343605b72d2f098185673",
                    "name": "Selten"
                }, {
                    "id": "adc9eafa8577e4e167b9005ab600fc41005372eb74c0b0bb1548d62e7299dc75",
                    "name": "Manchmal"
                }, {
                    "id": "dbbd589d41083238669ccc191a261fee32d68bda88057203265b183747b1a8c4",
                    "name": "Ziemlich oft"
                }, {"id": "51f67e2edbb6e4b5f7b7659cbf9bf445160378b39c42db4186fe61c4c593dd6b", "name": "Sehr oft"}]
            }
        }]
    }, {
        "id": "9f911236f23ad1185e601849b72258b2933abd9f3bd2210a2302d4232be20e85",
        "nodes": [{
            "id": "2c2b38a0fcd59f21a23211597e5dbb5f4ec37a46f6b391a9561c7d9eb9e4a943",
            "name": "Wie häufig hast Du wegen Deiner Verstopfung weniger Selbstvertrauen?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 Wochen.",
            "slots": [{
                "id": "0a72a914d1b26740db3df555a8bda840886b6a275273484eb9ebfac42c8f3190",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "f3d61cfe37dee49d7975cf39ea20785ae58cba6e10d190a993cf2e3200ab41e7",
                    "name": "Nie"
                }, {
                    "id": "bec6991dd46451fde69bd72dd8d614fa831a832b8d2343605b72d2f098185673",
                    "name": "Selten"
                }, {
                    "id": "adc9eafa8577e4e167b9005ab600fc41005372eb74c0b0bb1548d62e7299dc75",
                    "name": "Manchmal"
                }, {
                    "id": "dbbd589d41083238669ccc191a261fee32d68bda88057203265b183747b1a8c4",
                    "name": "Ziemlich oft"
                }, {"id": "51f67e2edbb6e4b5f7b7659cbf9bf445160378b39c42db4186fe61c4c593dd6b", "name": "Sehr oft"}]
            }
        }]
    }, {
        "id": "cce54df9013e257c0b519588a8a74cc39f1df128aed1e6b728a8cd1dd22ab579",
        "nodes": [{
            "id": "9fa74a15571c3e373995d4d52ff4b8637b4a22d1335fd4a088caabf77bcdf0cd",
            "name": "Wie zufrieden bist Du mit der Häufigkeit Deines Stuhlgangs?",
            "nameVisible": true,
            "description": "Denke dabei an die letzten 2 Wochen.",
            "slots": [{
                "id": "dfadf6b6fa5ee72fdf0ef757def90a1e9c1a853dcdb4937d90c7c3e0267240e3",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "ac264e6ba89f02ff2787c1fdd66b639c8e5e446c7e8e49d29a16bb07fc1bfc78",
                    "name": "Überhaupt nicht"
                }, {
                    "id": "42adb7bcce233792bbfbd3985dff51bae78c07c1331f6baf467d83e1598d2561",
                    "name": "Ein bisschen"
                }, {
                    "id": "f918dffd9af4443fafd6b2052b2c0e491d94c0563659ce8e23e12f411f68dba6",
                    "name": "Mäßig"
                }, {
                    "id": "d5d2210f525f639bf786c780266040330e01e020ece751c19f3ab6d6c9c738a1",
                    "name": "Ziemlich"
                }, {"id": "ba03f4730c741cd7082a9d053d361002dc578b46773cd2087c697f6d3e223c69", "name": "Sehr"}]
            }
        }]
    }, {
        "id": "fec7a8a98ea31e592041e081b9b17b77f804ef66f398399bf7c207034b10c9a0",
        "nodes": [{
            "id": "30b80d3dc26a2a0364eb74508cd6385629ea35c38bf22d97bdbecc2f50923d00",
            "name": "Hast Du Stuhldrang?",
            "nameVisible": true,
            "description": "Oder hast Du das Gefühl nie auf die Toilette zu müssen?",
            "slots": [{
                "id": "f955ec998d1eb21b566776270ee23e2a3e7195b465a90f190c93dd4a06e50594",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "f9d80bd771a1fd684d87ee20cc8053a08040a70b9696a11d3cd219b8585ed8c2",
                    "name": "Ich habe keinen Stuhldrang"
                }, {
                    "id": "b180e0de01041d07c98295b1e6f25779e45efc29417e55d0edffa905bbdfbad0",
                    "name": "Ich muss aktiv daran denken meinen Darm zu entleeren"
                }, {
                    "id": "68e47d5b3f187eac7878aa945708476eb4abf8377916f15627cad0ade6d57dbb",
                    "name": "Ich habe regelmäßig Stuhldrang"
                }]
            }
        }]
    }, {
        "id": "f240095f45d11d9e8f4cf27490e543fd2ef0c291b2f44c34929b1cf654ee34d2", "nodes": [{
            "id": "47f01e2bd98937237698c1df1f1f8450075b2913d679c949e565bc5262ea9520",
            "name": "Hat Dein Arzt bei Dir eine der folgenden Erkrankungen festgestellt?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus. Keine Eigendiagnose!",
            "slots": [{
                "id": "e2cf9ba4a7d4ea2a78fa3f5325bf9a44727701013c72d3f39c50700afe4fd45d",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "76ca18b1405c57ddd15660366d43ea5aa82a433cca65d09269fe8d58a3740444",
                "sequence": 0,
                "label": "Checkbox",
                "name": "M. Parkinson",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "e4bb5dc2824d354e8f1b438c0f5282542c4953568a889b40680df4d6f3696096",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "bdef6077c1583d528d824bd9a9a4a07025c3da244c363e6623bb7295a5b4ede8",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Reizdamsyndrom",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "15acbcaf38f378ddff376df158ba765a5f2332aa32d5a67d8a8e4e0785f2cff6",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "84aab74e832dfbaad72897708661cf5679e6b47bc93d87917988f88467f86dc4",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Schilddrüsenunterfunktion",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "37b6cec3746ea564477431cbb091424305a321cf6278ef9a09ca60d23fff2499",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "fa7c1c07645fb70da6fc7b1d92ba869c27e7a55cc8dae10e403d234af85c9164",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Chronisch entzündliche Darmerkrankung",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "c7b2699f0a4ff4f0debcbebfbe3f161d9aed447882e6e45b878e5d769ad93520",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "88dfaf9a71427cfcc6d2f55e009c687ec9a66d1297807d8469c55bf9b2c42a4d",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Rheumatische Erkrankungen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "8ca6bdef411a0f398c7332b0ce45046d1ab25e8946f46bc78f02bfd60f134ff0",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "5c4f5dd0e102916e96f9784ab4b23b27357f80fa6d43093a09e2808638a31d0b",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Zöliakie",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "60e22d3a79cbb815edd4fba47b1454f2fd5b2e2c7b1a8b42a08a45ee10eb2da3",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "f1ca1e01df46b74dda03fb0b9cb7f2677d1e0e2829bd453e8ba82b006f9b63d0",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Bestehende Rückenmarksverletzung",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "ec557b312e0d264d964918fbeaceecb7b65bda8a28d88e4db6f4fef9d6ee284c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "4ed5a53de178ecd871d02f6a4960bf3dbdc27a715b531cdce5857c87311cf93e",
                "sequence": 7,
                "label": "Checkbox",
                "name": "Nein, keine der genannten Erkrankungen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "5dcaeb2b4bd883679aab4caf655bfe6948232f796d52298580930c26edb53acf",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "76ca18b1405c57ddd15660366d43ea5aa82a433cca65d09269fe8d58a3740444",
                    "name": "M. Parkinson"
                }, {
                    "id": "bdef6077c1583d528d824bd9a9a4a07025c3da244c363e6623bb7295a5b4ede8",
                    "name": "Reizdamsyndrom"
                }, {
                    "id": "84aab74e832dfbaad72897708661cf5679e6b47bc93d87917988f88467f86dc4",
                    "name": "Schilddrüsenunterfunktion"
                }, {
                    "id": "fa7c1c07645fb70da6fc7b1d92ba869c27e7a55cc8dae10e403d234af85c9164",
                    "name": "Chronisch entzündliche Darmerkrankung",
                    "description": "z.B. Morbus Crohn, Colitis Ulcerosa"
                }, {
                    "id": "88dfaf9a71427cfcc6d2f55e009c687ec9a66d1297807d8469c55bf9b2c42a4d",
                    "name": "Rheumatische Erkrankungen",
                    "description": "z.B. Sklerodermie"
                }, {
                    "id": "5c4f5dd0e102916e96f9784ab4b23b27357f80fa6d43093a09e2808638a31d0b",
                    "name": "Zöliakie",
                    "description": "diagnostizierte Glutenunverträglichkeit"
                }, {
                    "id": "f1ca1e01df46b74dda03fb0b9cb7f2677d1e0e2829bd453e8ba82b006f9b63d0",
                    "name": "Bestehende Rückenmarksverletzung",
                    "description": "Querschnittslähmung"
                }, {
                    "id": "4ed5a53de178ecd871d02f6a4960bf3dbdc27a715b531cdce5857c87311cf93e",
                    "name": "Nein, keine der genannten Erkrankungen"
                }],
                "required": true
            }
        }]
    }, {
        "id": "c800377d10c9f9ee77d0edbf4b5c94bf6d4a2279b9aa75d6c706fae9c62dba0e", "nodes": [{
            "id": "3cffd4c1e44a4e0c4786cfc662087f7f5fba7081503292b9f22152f7ddd8d4be",
            "name": "Hattest Du in der Vergangenheit eine Operation im Bauchbereich oder im Unterleib?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "3f0ba79aef46a31950e248460ff3b74180cf5410a6dd2a2b17b7b8ede6d6cb1b",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "0b89c8a97f49fc7ccc75a994a02f7b535bf12df000deca11f1cb2fbce44d4d90",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Ja, mir wurde die Gallenblase entfernt",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "44d3b3df3e2e890431dd02417d4fea93162ce3c4cb987a7490c608d3dacc2ccb",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a47e08efbf990324b98b06d6b7c6e4d02e0da80142f088e7443a6968642d0cc8",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Ja, mir wurde der Blinddarm entfernt",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "1ce8ef84ab6db836a05f2581f149d59741e0f5d5517354b1b257906a55de87ae",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "f0c6d08ff38f5b2d7c1d443c225d4fb8d31cd78f7f3296ece5c0f11ef55d726d",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Ja, andere Operation im oben genannten Bereich",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "f53ff817dc067510c19f596cbf0f2f09919a4c5680989e2d88ab635a3d1907a8",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "936297bc57576415477ccd354e105c19f39430aa69aa5294029bb5d18ec50b16",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Nein, ich hatte keine Operation",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "541f55d7a42acf0c514549c128f99cdf318e7506b5abf6d37faf56ba9278e690",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "0b89c8a97f49fc7ccc75a994a02f7b535bf12df000deca11f1cb2fbce44d4d90",
                    "name": "Ja, mir wurde die Gallenblase entfernt"
                }, {
                    "id": "a47e08efbf990324b98b06d6b7c6e4d02e0da80142f088e7443a6968642d0cc8",
                    "name": "Ja, mir wurde der Blinddarm entfernt"
                }, {
                    "id": "f0c6d08ff38f5b2d7c1d443c225d4fb8d31cd78f7f3296ece5c0f11ef55d726d",
                    "name": "Ja, andere Operation im oben genannten Bereich"
                }, {
                    "id": "936297bc57576415477ccd354e105c19f39430aa69aa5294029bb5d18ec50b16",
                    "name": "Nein, ich hatte keine Operation"
                }],
                "required": true
            }
        }]
    }, {
        "id": "d9c8bf60f1a28984bf3a581ccb2e921943a37c7fe15c68e97c99879b1ab1aa2c", "nodes": [{
            "id": "04b3db734dd1b957d13c44f6083ab694c7b2f4d34efa73fa96df32a7f4b7b9b8",
            "name": "Leidest Du unter einer der folgenden Erkrankungen?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "84d9adb961ae53ab63773cbf49f6493d3d586880e02e46002341439f30c65f3f",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "d8ededfa01190bd2eab30173547ddfcd53ac93569a6998d4f7bd9b7ce25ad252",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Diabetes mellitus Typ 2",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "90648b53cef343e3391a17438a42db2ceb9b1d629ba663a3608738b12025b6a2",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b2b5f299cc21cfee97284182210df08e7faf612be9221b6bf88696959e981361",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Asthma",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "a47403382ded15298d13cbaa82400b971d4fc395c94ad823dbeb81e1085c3cdd",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "654ba3c2167bf27a35cd0d60b47e493e0aa8b1f82b7f3494b14d655a70dac91c",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Erkrankungen des Herzens",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "cbb02006d2d6cb2be9afb7f51c015e94d69ab15ed06ec979627d8a0b27a2ec78",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "7e22566f54230dcc3173b531127cf491368274dfe3dd39fbb1e05ca05224949a",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Beschwerden der Wechseljahre",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "b34e4cc79462894e40a09c501201c46564fb89d3fcc664f36079b28abf5cd2ed",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b162b4a5b5d7bd736e3ea8fccfffb9cf1cd9fa2b5e2fd433051e297c3e75ffa6",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Allergien",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "6cb6c3a3d0151b73c60c2037265c1dd93bddfd157c76cb1420abdc21f56ca8a5",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "514e8afa8df52bc173cab5d92e62ce98030390fb0471e91ce25e7b8dd0ed6331",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Sodbrennen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "cb01fab1cedfb2a256b4e594e05ccd7bd7ca5fda222b561da4dd13e2741d075f",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b9ed91d70825816614a045cb623f1db82384b999ac48cfad1a8b10f41c4cefb7",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Schlafstörungen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "a9964eaa4a6140a4d1a70415ff9b33cd15fa9c85dc20a1ee69da856533b1f992",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "74772189b161513776fe5d7d3d3447b729bb20d81e11e31a05a2de024380b23d",
                "sequence": 7,
                "label": "Checkbox",
                "name": "Migräne",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "90f90f453693abc5efb79febcf6da863d5bc8bdba03c3b5abe74f512e167b710",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "8d06caf665c4fed1f7b61b7bbddd9d70d2c832effccf3f4cfadc786b2b411909",
                "sequence": 8,
                "label": "Checkbox",
                "name": "Nein, keine der genannten Erkrankungen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "097dcdb4768359ff3560acf8fe55b9d417501962ac406283313ea3c2dda4666b",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "d8ededfa01190bd2eab30173547ddfcd53ac93569a6998d4f7bd9b7ce25ad252",
                    "name": "Diabetes mellitus Typ 2"
                }, {
                    "id": "b2b5f299cc21cfee97284182210df08e7faf612be9221b6bf88696959e981361",
                    "name": "Asthma"
                }, {
                    "id": "654ba3c2167bf27a35cd0d60b47e493e0aa8b1f82b7f3494b14d655a70dac91c",
                    "name": "Erkrankungen des Herzens",
                    "description": "z.B. Herzinsuffizienz, KHK, Vorhofflimmern, Herzinfarkt"
                }, {
                    "id": "7e22566f54230dcc3173b531127cf491368274dfe3dd39fbb1e05ca05224949a",
                    "name": "Beschwerden der Wechseljahre",
                    "description": "Hitzewallungen, Schweißausbrüche"
                }, {
                    "id": "b162b4a5b5d7bd736e3ea8fccfffb9cf1cd9fa2b5e2fd433051e297c3e75ffa6",
                    "name": "Allergien"
                }, {
                    "id": "514e8afa8df52bc173cab5d92e62ce98030390fb0471e91ce25e7b8dd0ed6331",
                    "name": "Sodbrennen",
                    "description": "Refluxkrankheit"
                }, {
                    "id": "b9ed91d70825816614a045cb623f1db82384b999ac48cfad1a8b10f41c4cefb7",
                    "name": "Schlafstörungen"
                }, {
                    "id": "74772189b161513776fe5d7d3d3447b729bb20d81e11e31a05a2de024380b23d",
                    "name": "Migräne"
                }, {
                    "id": "8d06caf665c4fed1f7b61b7bbddd9d70d2c832effccf3f4cfadc786b2b411909",
                    "name": "Nein, keine der genannten Erkrankungen"
                }],
                "required": true
            }
        }]
    }, {
        "id": "bd939fdd6012887f109d6c3d3389fe0233dc354db8f361a37ef7d48d0a89115a", "nodes": [{
            "id": "3ffb042a5babb6aa5d09d4f7d831b8dee1c5664862a4b1061d64e47c1ca19eb8",
            "name": "Hast Du in den letzten 12 Monaten Antibiotika eingenommen?",
            "nameVisible": true,
            "description": "Entweder als Gel/Creme (z.B. gegen Akne), als Tablette oder als Infusion.",
            "slots": [{
                "id": "399aa9edeb9dbf2f6c59a98c7587f5cff181b49a0e9d0234e95ad888a222f446",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "aa3a0aeb3954303c385108531adfb117e1a4868d4c3e78f0cc182ef25fa2158f",
                    "name": "Ja, ich nehme aktuell Antibiotika"
                }, {
                    "id": "1faf4dd8834e9ec302eec912614e93ddfc2f84ceb201dcf1802ec5ea400f9a78",
                    "name": "Ja, innerhalb der letzten 3 Monate"
                }, {
                    "id": "15dff4eaa6b70be709676e15f2f59fc01d7b8017e3e877959475b6fc6abb1f25",
                    "name": "Ja, innerhalb der letzten 6 Monate"
                }, {
                    "id": "46959f424b2bd250b8a543e7db07df509e16c01091fa2402cd99bc2cb490561b",
                    "name": "Ja, innerhalb der letzten 12 Monate"
                }, {"id": "21f56dacfe97d24e8db4c6b4579948ebc109fe7bd9ffce4be806d78bf7ba2fc9", "name": "Nein"}]
            }
        }]
    }, {
        "id": "02fc78f3c7c8e99a1be59340b0fc8606e5464070feab16301917de00813cb762", "nodes": [{
            "id": "551fdbab265d3bbe58f173df73f13401f4cce2b7a967ed57bc84e963ce2916f0",
            "name": "Nimmst Du eins oder mehrere der folgenden Medikamente?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "ba256be1bbb1f97eb13bb5b407ea518340896dad50a8e7ee966e6c2e1291b44e",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "23b3f4c90efe8a1ddfaad78e81c6cfc730c8fea1512b2548dc00567d881ed4c3",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Blutdrucksenker",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "85e26284020c8f2c0bfd86ef638b06ccb7c51047575d30f061e4a034c3dd0aa7",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b50c7ca9ec0d6291bf7e6597be4a025e056bcd5ce3dbaa724f64ea65e2ccdd64",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Antidepressiva",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "d1b042ef49cc291712ca5b4961fcf9aa611ad1278c005cee68b3e0df10817c76",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "b12cf4cd9db144831e9318a13e3014161d0bc53287105f3d299d6b5826a65133",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Antiepileptika (auch bei Nervenschmerzen)",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "9a4d685c6763cfae4bf7ff84c1433f03617aac4b288c0de487ed11c2d9154d5a",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "381aebb44d9611731da16b0324d9790a0e1a8da814b67e4c488cb2ab4e2e6e62",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Neuroleptika / Antipsychotika",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "97d5ad4d83f7e43e67aba51d0c0072a5bec468fdf08ffdee707a3c27c5c44608",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "5bee4ae7323be4a69c65d865414d66005c9230b7354003a0f838475ea82332e0",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Opiate / Opioide",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "634a2bd9a05a4fd3eec34f2b71be57331a6445828f0ffba50f7a59b4dbe2d0ac",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a6e6a9963d0177b225e170e8ab46bdf378e5f6add84cac7c613decaab84879ed",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Diuretika",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "52c121292170011fe1e654ebf793de9557f0151262d8780e0fb9b5735986abec",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "771093e25f33bb718208617e574e0ac5d7eacacb2f33efb343643021bbc79683",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Nein, keins der genannten Medikamente",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "27cf78ffeaf82b6ebdfc3b9f536828ad1d2839cfb2667803a45ca402e1840f68",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "23b3f4c90efe8a1ddfaad78e81c6cfc730c8fea1512b2548dc00567d881ed4c3",
                    "name": "Blutdrucksenker",
                    "description": "z.B. Amlodipin, Exforge®, Metoprolol, Beloc-Zoc®, Valsartan"
                }, {
                    "id": "b50c7ca9ec0d6291bf7e6597be4a025e056bcd5ce3dbaa724f64ea65e2ccdd64",
                    "name": "Antidepressiva",
                    "description": "Amitriptylin, Saroten®, Citalopram, Venlafaxin, Mirtazapin"
                }, {
                    "id": "b12cf4cd9db144831e9318a13e3014161d0bc53287105f3d299d6b5826a65133",
                    "name": "Antiepileptika (auch bei Nervenschmerzen)",
                    "description": "L-Dopa, Restex®, Biperiden, Bensarazid, Carbidopa"
                }, {
                    "id": "381aebb44d9611731da16b0324d9790a0e1a8da814b67e4c488cb2ab4e2e6e62",
                    "name": "Neuroleptika / Antipsychotika",
                    "description": "Haloperidol, Haldol®, Levopromazin"
                }, {
                    "id": "5bee4ae7323be4a69c65d865414d66005c9230b7354003a0f838475ea82332e0",
                    "name": "Opiate / Opioide",
                    "description": "Tramal®, Tilidin, Valoron®, Palladon®, Oxycodon, Targin®, Palexia®, Tamgesic®"
                }, {
                    "id": "a6e6a9963d0177b225e170e8ab46bdf378e5f6add84cac7c613decaab84879ed",
                    "name": "Diuretika",
                    "description": "Furosemid, Lasix®, Torasemid, Torem®"
                }, {
                    "id": "771093e25f33bb718208617e574e0ac5d7eacacb2f33efb343643021bbc79683",
                    "name": "Nein, keins der genannten Medikamente"
                }],
                "required": true
            }
        }]
    }, {
        "id": "7fcfe4e9f2420282ebf24c90b5d485aeb89fc2c9b62f024ed353c36e8833abfb", "nodes": [{
            "id": "71e82ec9bdd6dad2bca9c73c5b11151110cc3cba3954647d2d1da7b2d7c47f9f",
            "name": "Nimmst Du eins oder mehrere der folgenden Medikamente?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "61c1cdd05505c15e3a34ccb94cf9804dc50c912ead1a047f69c5061fb404daf8",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "5c5a4478a40942752d02d7455d9a361b9d96fa94acc73c0eb794f88ea7fb1af9",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Hormone",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "83aa16db803a4aaaaa8091da5e5a177890109699ea33148dbf7eda0f4fdb0be1",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a4cd08b9c66564cff0f36c957407782e7590a09f34ac3bcc503113d7b12d13ff",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Kortison",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "31609bc1277514bb6846f47bd180903a34bcb985baf4dec2d8cb74c8edc84cb7",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "c2a07d87ff7274bb96fcf3eb16a16cafa9acc35564ede379704ebf35ec14c5d6",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Magensäurehemmer",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "2da051972c3f04e177bcee0d9412fff1d171ae05f29406f5043c01b6b8448556",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "9916a90c4c382412b3caf2dacdec0d53b47912b22c8d5e792b6d806c1bbaa0e0",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Antidiabetika",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "b14ccd9ded6acd0e9721f70c9d2b98ed0f2d1dbf5fd12178321a60fcf4e905ed",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "ab34e10b5665ed4daeeec0537994e8bc6f83b886e6275e65cc8d46ea8c9552c9",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Eisen-Präparate",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "870fc7a18608187bfd142a25df71a143414025a12cb876398efbcdab76bb0502",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "ca5f1e79f1e0ce1cce99a9405d00d7686177d025ada8944b0906ea9296ea01e9",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Spasmolytika",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "9f62ca855fdef6c5d21ba803d083f1e65f1485f3bf36d8a1b3195bf087d8dcf4",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "671feeaae3836dd4e652674bae6d76974fb1422f088dec6629b129b93c5aa278",
                "sequence": 6,
                "label": "Checkbox",
                "name": "Schilddrüsenhormone",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "41dc88a00f762214394bb8015526934e45ddf81b2eb6eed362d8150fd0db6b3c",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "3df62c3fc9d9728d7a07786da3212c329f7b74c8016418435d54e62f0b4f7082",
                "sequence": 7,
                "label": "Checkbox",
                "name": "Nein, keins der genannten Medikamente",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "d7eca65e451fabed9982f7c6b49bf0cca85b1ef2e2cf5ecd1c8d03b9ccb00f75",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "5c5a4478a40942752d02d7455d9a361b9d96fa94acc73c0eb794f88ea7fb1af9",
                    "name": "Hormone",
                    "description": "\\"Pille\\", Hormonspirale, Wechseljahresmedikamente"
                }, {
                    "id": "a4cd08b9c66564cff0f36c957407782e7590a09f34ac3bcc503113d7b12d13ff",
                    "name": "Kortison",
                    "description": "Prednisolon, Decortin®"
                }, {
                    "id": "c2a07d87ff7274bb96fcf3eb16a16cafa9acc35564ede379704ebf35ec14c5d6",
                    "name": "Magensäurehemmer",
                    "description": "Omeprazol®, Pantoprazol®, Ranitidin®"
                }, {
                    "id": "9916a90c4c382412b3caf2dacdec0d53b47912b22c8d5e792b6d806c1bbaa0e0",
                    "name": "Antidiabetika",
                    "description": "Metformin, Sitagliprin, Janumet®, Jardiance®, Glimepirid®"
                }, {
                    "id": "ab34e10b5665ed4daeeec0537994e8bc6f83b886e6275e65cc8d46ea8c9552c9",
                    "name": "Eisen-Präparate",
                    "description": "Ferro Sanol®, Floradix®"
                }, {
                    "id": "ca5f1e79f1e0ce1cce99a9405d00d7686177d025ada8944b0906ea9296ea01e9",
                    "name": "Spasmolytika",
                    "description": "Buscopan®"
                }, {
                    "id": "671feeaae3836dd4e652674bae6d76974fb1422f088dec6629b129b93c5aa278",
                    "name": "Schilddrüsenhormone",
                    "description": "L-Thyroxin®, EFEROX®, Euthyrox®, Novothyral®, Thyranojod®"
                }, {
                    "id": "3df62c3fc9d9728d7a07786da3212c329f7b74c8016418435d54e62f0b4f7082",
                    "name": "Nein, keins der genannten Medikamente"
                }],
                "required": true
            }
        }]
    }, {
        "id": "bf978f0c5db2361698eff21bffc01836189d8deb43d13a1cc23e725aebdd4944",
        "nodes": [{
            "id": "9462542957ceb5dd32e78ed8d879e16dc8381fadad1e66b7a013ecea9fc7a956",
            "name": "Hast Du innerhalb der letzten 12 Monate eine Chemotherapie erhalten?",
            "nameVisible": true,
            "slots": [{
                "id": "02fb338fd7197c38b0cb8c5032f548ec43bed718ee1e89c6644019555f00472b",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "cea0ede435e50fb45c9d5bc3530340e7c9185647bd5fae6761bbcb6efd51a982",
                    "name": "Nein"
                }, {"id": "7cb5cba6d361910a89b181aa2f65261f8a182468eb48176ef22e0ba90ddf12f0", "name": "Ja"}]
            }
        }]
    }, {
        "id": "61dfec3106e76918acd5e05edd03c6bd752a04a1ea3d65020cbb422eb3ba0369",
        "nodes": [{
            "id": "18980de5b6d84cfa980ac580089bad478ff10b1f56bcf7ffab8965114a3ffcb5",
            "name": "Letzter Abschnitt, fast geschafft",
            "nameVisible": true,
            "description": "Die Angaben zu Deinen Lebensumständen dienen dazu, das Programm noch einfacher für Dich zu gestalten. Zuletzt schließen wir Hinweise auf schwerwiegende Erkrankungen aus.",
            "block": {
                "type": "tripetto-block-paragraph",
                "version": "4.0.1",
                "imageURL": "",
                "imageAboveText": true,
                "imageWidth": ""
            }
        }]
    }, {
        "id": "5eb437cfbcecf644ec6dbf777e5e3225008859d94a4bddcd0aa13cca154ed1de", "nodes": [{
            "id": "d91da33df7e1eaa8b9eb8b7ce16f35cd4522300b6b501146002ad8df419611db",
            "name": "Welche Mahlzeiten bereitest Du Dir üblicherweise selbst zu?",
            "nameVisible": true,
            "slots": [{
                "id": "d53e0aad5a76347866b79ffb6dc5ca272b38e1ea4615416f6ad29fb060cdd786",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "15ed8efd3a1da2e1f48293c9ca77cc909cc38abf983c018670e371f546619863",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Frühstück",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "3090e24e04c34b9e64b9381cd4cb29b4add9c9dddcabed6d1339bd82ff0c1ed9",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "48e1997d26258d0ccd93576e6ddcc81bb4f36023221df37fa441d2eaae4c1874",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Mittagessen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "9123d4b7d1f7de0e2eb172c0ac9e954d636ab237993458c072be0a95a735dd95",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "76c4a604b0af84ae6c92bb7dd0adeabeeca0a73047283f3d6b8be4e4eafea767",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Abendessen",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "c8869eba74e729fe582e1475edbeddf7ea66d0f9997a2c54a0486b18301c8564",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "94d7608fbff39181d51f6430d733ec4be669a0aef5039ec680fbc9e66c6b10ec",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Keine davon",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "029a5ea3245554e79686537f028e64ff887a011be295bfdb2cfd9ba2f2da08f9",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "15ed8efd3a1da2e1f48293c9ca77cc909cc38abf983c018670e371f546619863",
                    "name": "Frühstück"
                }, {
                    "id": "48e1997d26258d0ccd93576e6ddcc81bb4f36023221df37fa441d2eaae4c1874",
                    "name": "Mittagessen"
                }, {
                    "id": "76c4a604b0af84ae6c92bb7dd0adeabeeca0a73047283f3d6b8be4e4eafea767",
                    "name": "Abendessen"
                }, {"id": "94d7608fbff39181d51f6430d733ec4be669a0aef5039ec680fbc9e66c6b10ec", "name": "Keine davon"}],
                "required": true
            }
        }]
    }, {
        "id": "55827607156ee945af86b0e6ff91110cf7125e09aa5ab55c8b552cfffe3b6018",
        "nodes": [{
            "id": "e2f06cdc781cf69f987fb5f43ea68e9f8b4658691aaddaf4fa40f4a49329eb12",
            "name": "An wie vielen Tagen einer üblichen Woche bereitest Du Dir ein Frühstück zu?",
            "nameVisible": true,
            "slots": [{
                "id": "c20969d5ca12fe32db62e177e5b3c4c0116e2c26dbd987027cf1ba5907c48eb3",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "6664592d08c8447969be88627ee2f42182690c951ddf7443207443853f29e606",
                    "name": "Nie"
                }, {
                    "id": "c104fb700889bc106972d1984e68d93cd8553b84dd1694194ad7c90829118273",
                    "name": "1-2 x pro Woche"
                }, {
                    "id": "9a4e7da85b3c11606e3d77a5e9943b7c26e1036736a3d6c602ee29ab9fd48272",
                    "name": "3-4 x pro Woche"
                }, {
                    "id": "b1854342d089130d0b8633e7cd46bcd0a0dd2984a1ff92544f20d70296ef6579",
                    "name": "5-6 x pro Woche"
                }, {"id": "fd3ebbb6c4d22025bff380c0f81f5a78483ba08f0237ca3cfec3800d404ca095", "name": "Täglich"}]
            }
        }]
    }, {
        "id": "af431d03de9eb9368c2b726e0557434b3f365687a70a14eb6e1925d3860d81ec", "nodes": [{
            "id": "9b24a8da2ca20ef136a208ffd32d2580ae77f732600fcf2115af51bc3b2a1160",
            "name": "Folgst Du einer bestimmten Diät oder Ernährungsweise?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "145efc2d5d42955a0065a41043d76dfffd05973c6102c546c3d0cb2fd2fb8122",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "8df13f96a13bf5464a38be9fce26dc30e750f30c85a6362d1b7b615e6bc10468",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Vegetarisch",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "7722467ceaa4ed4176ee1d29039eb9cfa8161f924e0c94ffb3a6712bba89ba4a",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "4298f914b73a249201fcc673428a928441b5260c32b9c1acbd251d864b8a8cc4",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Vegan",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "3b9f47eca0eb1c569318bab2d7e56c1590c527e5db3f1838d4f73a05a5b20e53",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "72197ad811f3077a48fa49038c47e931d35c2210bc10a32b7d8675233ca1cf06",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Glutenfrei",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "0e06ce59039e7a75d4b8155c7d8534f7926b55417ce08c128f0e1bdbc60a3fc7",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "bd28cb3efb266488273b576e87ff45c06eac9d41ef17ad4daaf67c034b81b36f",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Intermittierendes Fasten",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "1ffd739f9ae5e63986a13f0acda7854086812a2219ecc27ccb69e1842502d23e",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "34eab4593527528fb023d4a13e7c66d1682256377ccb5cc86a4c9340e72f4866",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Andere",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "787066ece23119f42a76ff3960f155189a76c5e758b7734f44829fb69366b922",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "12919136ddc5e854ef23fb32a8c610dc10fd13522e27353370ae3aecccc10b13",
                "sequence": 5,
                "label": "Checkbox",
                "name": "Nein",
                "required": true,
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "15cad7cd618d1a75be923c9b3e14957ada6c209c86131a9a5f498ee4d5b7879a",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "8df13f96a13bf5464a38be9fce26dc30e750f30c85a6362d1b7b615e6bc10468",
                    "name": "Vegetarisch"
                }, {
                    "id": "4298f914b73a249201fcc673428a928441b5260c32b9c1acbd251d864b8a8cc4",
                    "name": "Vegan"
                }, {
                    "id": "72197ad811f3077a48fa49038c47e931d35c2210bc10a32b7d8675233ca1cf06",
                    "name": "Glutenfrei"
                }, {
                    "id": "bd28cb3efb266488273b576e87ff45c06eac9d41ef17ad4daaf67c034b81b36f",
                    "name": "Intermittierendes Fasten",
                    "description": "z.B. 16:8"
                }, {
                    "id": "34eab4593527528fb023d4a13e7c66d1682256377ccb5cc86a4c9340e72f4866",
                    "name": "Andere"
                }, {"id": "12919136ddc5e854ef23fb32a8c610dc10fd13522e27353370ae3aecccc10b13", "name": "Nein"}],
                "required": true
            }
        }]
    }, {
        "id": "0c419cff4d74201cdd74b2ff3ee6fcc142ac27eeb3dc77cf7b756645f991b068",
        "nodes": [{
            "id": "a464c594577d6422dce8891e952715052d31b903b2d6a8c0e81c1c0a74e1eb13",
            "name": "Ist unter Deinen nächsten Verwandten jemand an Darmkrebs oder Magenkrebs erkrankt?",
            "nameVisible": true,
            "slots": [{
                "id": "58ae82fe900ab6ec05bdc53aa3f3c3309d450a1ceee3fa7c7a11b4332b7f28e9",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "4cc76c494c7df3136f05d26d972999d20c77af83240ec3345cf7a2d247893562",
                    "name": "Ja"
                }, {"id": "f2ff659c94bc4f152164a1235a5668d01c588aecb9dd07adb47de1fba5aa7ecd", "name": "Nein"}]
            }
        }]
    }, {
        "id": "d71913ae2ff6eba60b69304504cf865702e02e9feca745ded5e4a4cdd236ff17",
        "nodes": [{
            "id": "d273a52ebfe25026123602682c063fd2fc882c147a263f5c67473f9ec2e65157",
            "name": "Welche der folgenden Aussagen trifft auf Dich zu?",
            "nameVisible": true,
            "description": "Wähle alle zutreffenden Antwortmöglichkeiten aus.",
            "slots": [{
                "id": "04f54bc069b2352376ba6aa9c34295c0211d41c701339a23e0e5630ff09306d5",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "5c905579c6800c90f3f2d0862647b682c556b5a2484b273db9b6694b100bad11",
                "sequence": 0,
                "label": "Checkbox",
                "name": "Die Verstopfung kam bei mir wie aus heiterem Himmel und ich habe starke Schmerzen.",
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "139707e53e411efbe9eb9dbe23175f675ad9242817f225b93b21ed03c65a5d92",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "a994253be0504fe9b7933b8388e3f1b57b2f8c7311a7ed63a1e64f9f5d512ac9",
                "sequence": 1,
                "label": "Checkbox",
                "name": "Ich habe Blut im Stuhl",
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "2750971979b53716b3644c7926e24031ba1b993971217077512d55ee701a705e",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "7c64a8f326ae2f4d5322ed1fd60535713c9a63e7ebf92bf380d8da1ceb29b365",
                "sequence": 2,
                "label": "Checkbox",
                "name": "Ich leide unter Verstopfung und habe ungewollt stark an Gewicht verloren",
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "2992e931464de0ef0a51d33c19635efdbc0745f49691169ebf61f8aaec503cd7",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "669f25c87f6f38656a9947f38979fdeddccd42ebe779d53b476fe4c1d17f73b9",
                "sequence": 3,
                "label": "Checkbox",
                "name": "Ich leide unter Übelkeit und „schwallartigem Erbrechen“.",
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "339f2dd8301c8b561d8b9a4af8f39d99da3d99127f471b2f0ae9c31cf2f9ce76",
                "type": "boolean",
                "kind": "dynamic",
                "reference": "884ff4167ff18c6dadc4e0560d4ed7ad94f59046be9ecfcc10cc24bd73ae170e",
                "sequence": 4,
                "label": "Checkbox",
                "name": "Keine der Aussagen trifft auf mich zu.",
                "pipeable": {"label": "Checkbox", "content": "name", "legacy": "Checkbox"},
                "labelForFalse": "Not checked",
                "labelForTrue": "Checked"
            }, {
                "id": "7a489065c7b3fd1a4ad9cbc01e9c05096ab7ffc486f282da66c3cbb360bd83d7",
                "type": "number",
                "kind": "feature",
                "reference": "counter",
                "label": "Counter",
                "exportable": false
            }],
            "block": {
                "type": "tripetto-block-checkboxes",
                "version": "6.1.3",
                "checkboxes": [{
                    "id": "5c905579c6800c90f3f2d0862647b682c556b5a2484b273db9b6694b100bad11",
                    "name": "Die Verstopfung kam bei mir wie aus heiterem Himmel und ich habe starke Schmerzen."
                }, {
                    "id": "a994253be0504fe9b7933b8388e3f1b57b2f8c7311a7ed63a1e64f9f5d512ac9",
                    "name": "Ich habe Blut im Stuhl"
                }, {
                    "id": "7c64a8f326ae2f4d5322ed1fd60535713c9a63e7ebf92bf380d8da1ceb29b365",
                    "name": "Ich leide unter Verstopfung und habe ungewollt stark an Gewicht verloren"
                }, {
                    "id": "669f25c87f6f38656a9947f38979fdeddccd42ebe779d53b476fe4c1d17f73b9",
                    "name": "Ich leide unter Übelkeit und „schwallartigem Erbrechen“."
                }, {
                    "id": "884ff4167ff18c6dadc4e0560d4ed7ad94f59046be9ecfcc10cc24bd73ae170e",
                    "name": "Keine der Aussagen trifft auf mich zu."
                }]
            }
        }],
        "branches": [{
            "id": "b3a8158acb42e88e03bc9264bb2740830e5c1abe985642a289c1887066f3e457",
            "conditions": [{
                "id": "df652028616e0330b4ecb564201c6657f7c3484e42c4e5be45c5a9ce8cab7f09",
                "block": {
                    "type": "tripetto-block-checkboxes:unchecked",
                    "version": "6.1.3",
                    "node": "d273a52ebfe25026123602682c063fd2fc882c147a263f5c67473f9ec2e65157"
                }
            }],
            "jump": "a9b412690c3ab30a29130edd0933f78683b4c2ec6fde051cee3ec1506b44b544"
        }]
    }, {
        "id": "4231d04e7ae570d4baf11daca2826d48a5c250dfcf97868fe77989f55c0ccbf4",
        "nodes": [{
            "id": "55a342a8d5f32aef54d8f54e97dde4e8e083c5b6f24c5bc395709c9a02979104",
            "name": "Bitte nimm schnellstmöglich Kontakt zu Deinem Arzt auf und lass Dich untersuchen.",
            "nameVisible": true,
            "description": "Eine Antwort in Deinem Fragebogen deutet darauf hin, dass Du Dich einem Arzt vorstellen solltest. Das Programm ist nicht zur Behandlung akuter Symptome geeignet.",
            "block": {"type": "tripetto-block-paragraph", "version": "4.0.1"}
        }]
    }, {
        "id": "a9b412690c3ab30a29130edd0933f78683b4c2ec6fde051cee3ec1506b44b544", "name": "screens/q/40", "nodes": [{
            "id": "f8dbe584d7c5275668d3e588c26af95b09c8c1a4e16ecc5b6c4a9e2096cc7caa",
            "name": "Bist Du bereit, Teile Deines täglichen Ernährungsverhaltens zu verändern?",
            "nameVisible": true,
            "description": "z.B. Apriwell - Rezepte kochen oder die Apriwell - Präparate einnehmen",
            "slots": [{
                "id": "fd7c93138d2e8b1fd52ebac4a56923c38e1842b5edf2df6c268e20fa3e332788",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "d10425c4c01c3fb06a62aaae78cf2952f4d340a7f0ed7c7655b76cd7e742cd7e",
                    "name": "Nein, und ich habe es auch nicht vor"
                }, {
                    "id": "e57a5312b465caf6403e88f674122ecc2bf1b1fa23db10a649a43aeb653207d3",
                    "name": "Nein, aber ich denke darüber nach"
                }, {
                    "id": "9e23b9bc06a57be1e87ac4f11ef866f310b1a99a302c26a720c54b8a38e6b4f7",
                    "name": "Ja, aber ich möchte dabei nicht durch Apriwell unterstützt werden"
                }, {
                    "id": "9a416c8772477d9f17db7de4a23294f66261d9616b5ad3984839dfca3f384da0",
                    "name": "Ja und ich möchte durch Apriwell unterstützt werden"
                }, {
                    "id": "5ca522b0ad9a6f88f4345924233c423c37b8c6b2b6ef02421e28f9dd9e3b5d3c",
                    "name": "Keine der genannten Aussagen trifft auf mich zu."
                }]
            }
        }]
    }, {
        "id": "c9e2d98e0c71247479163bc24064831634e5c4d2104630d63195a338daa2b19f", "nodes": [{
            "id": "b914eac93152badc3d79800f6a063c0c5e967bf75c14fce8581ccb405f198626",
            "name": "Bist Du bereit, Teile Deines täglichen Bewegungsverhaltens zu verändern?",
            "nameVisible": true,
            "description": "z.B. häufiger Spazieren gehen oder Yogaübungen durchführen",
            "slots": [{
                "id": "91496f18b0715d336fcbc6884021c80b1e602b0134882ff39a17766ac73768d7",
                "type": "string",
                "kind": "static",
                "reference": "button",
                "label": "Selected button",
                "required": true
            }],
            "block": {
                "type": "tripetto-block-radiobuttons",
                "version": "6.0.3",
                "buttons": [{
                    "id": "698ca3e1a7a336beadb1012f86638e307657e8c3a1eb3848924d6a8fba60cae0",
                    "name": "Nein, und ich habe es auch nicht vor"
                }, {
                    "id": "5887378d0e93b5de86379feba10f0b848c79e8cb83b3f39014bfbfb619cd6016",
                    "name": "Nein, aber ich denke darüber nach"
                }, {
                    "id": "babf9c49bd96d0ceb1cd081f71ac38fa093bf275def1eb37b93413da8c01a36d",
                    "name": "Ja, aber ich möchte dabei nicht durch Apriwell unterstützt werden"
                }, {
                    "id": "e1f0d6c76ffceaa9e145e746b57afdfd990aa3e7fc8d28930844d22f276776df",
                    "name": "Ja und ich möchte durch Apriwell unterstützt werden"
                }, {
                    "id": "f21a5fb202dd24f1069ef0da0b1beaf5bb268154ff19d270405a1f39d8bf33f8",
                    "name": "Keine der genannten Aussagen trifft auf mich zu."
                }]
            }
        }]
    }],
    "builder": {"name": "tripetto", "version": "4.5.0"}
}`;
