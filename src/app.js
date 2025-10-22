import Nav from './headerComponents.js'
import Button from './button.js'
import Spacer from './spacer.js'
import Main from './main.js'
import Stats from './stats.js'

export default function App ()
{
    var app = document.createElement ('app');

    app.appendChild (Nav ({
        display: "flex",
        width: "1196.45px",
        height: "53px",
        bgColor: "rgba(238, 238, 238, 20%)",
        backDrop: "blur(10px)",
        margin: "auto",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "0px",
        bdRadius: "10px",
    }, {ButtonComponent: Button}));

    app.appendChild (Spacer ({
        width: "1196.45px",
        height: "81.03px",
        margin: "auto"
    }));

    app.appendChild (Main ({ button: Button, spacer: Spacer, stats: Stats }));

    app.style = ` padding: 31px 41px; font-family: sans-serif; `;

    return app;
}
