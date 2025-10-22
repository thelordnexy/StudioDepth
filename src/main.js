export default function Main (properties)
{
    var main = document.createElement ('main');

    main.appendChild (MainText ({ lead: "Explore the New Visual Language", sub: "Curated digital exhibitions by artists redefining the medium.",}, { ButtonComponent: properties.button, SpacerComponent: properties.spacer, StatsComponent: properties.stats }));

    main.appendChild(ImageStack ());

    main.style = "display: flex; width: 1196.45px; height: 452px; margin: auto;";

    return main;
}

function MainText (properties, dependencyComponent)
{
    const { lead, sub } = properties;

    var mainText = document.createElement ('div');
    var leadText = document.createElement ('h2');
    var subText = document.createElement ('h3');

    leadText.appendChild (document.createTextNode (lead));
    subText.appendChild (document.createTextNode (sub));

    mainText.style = "width: 598.225px; height: 452px; padding: 34px 0 0 9px;";
    leadText.style = "width: 502px; height: 161px; font-size: 60px; padding:0; margin:0; font-weight: 400; letter-spacing: 1px;";
    subText.style = "width: 407px; height: 50.83px; font-size: 21px; padding:0; margin:0; font-weight: 400; letter-spacing: 1px;";

    mainText.appendChild (leadText);

    mainText.appendChild (dependencyComponent.SpacerComponent ({
        height: "16.77px",
    }));

    mainText.appendChild (subText);
    mainText.appendChild (dependencyComponent.SpacerComponent ({
        height: "28.87px",
    }));

    mainText.appendChild (dependencyComponent.ButtonComponent ({
        text: "Visit the gallery",
        width: "233.25px",
        height: "46.57px",
        color: "#FFFFFF",
        font_size: "16px",
        font_weight: 400,
        bgColor: "#010101",
        padding: "10px 18px",
        border: "0px",
        bdRadius: "6px",
        cursor: "pointer",
    }));

    mainText.appendChild (dependencyComponent.SpacerComponent ({
        height: "28.87px",
    }))

    mainText.appendChild (dependencyComponent.StatsComponent ());

    return mainText;
}

function ImageStack ()
{
    var imageStack = document.createElement ('div');

    imageStack.style = "width: 598.225px; height: 452px; padding: 0 70px 0 0;";

    imageStack.appendChild (Image ({
        width: "277.44px",
        height: "234.76px",
        position:"relative",
        top:"107px",
        left:"97px",
        zIndex: 2
    }));
    imageStack.appendChild (Image ({
        width: "223.67px",
        height: "191.83px",
        position:"relative",
        top:"-244px",
        left:"319.33px",
        zIndex: 3
    }));
    imageStack.appendChild (Image ({
        width: "209.69px",
        height: "172.65px",
        position:"relative",
        top:"-157px",
        left:'0',
        zIndex: 1
    }));
    imageStack.appendChild (Image ({
        width: "247.33px",
        height: "204.62px",
        position:"relative",
        top:"-370px",
        left:"260px",
        zIndex: 3
    }));

    return imageStack;
}

function Image (properties)
{
    var image = document.createElement ('div');

    const { /*imageSrc*/ width, height, position, top, left, zIndex } = properties;

    // image.src = imageSrc;
    image.style = `width: ${width}; height: ${height}; box-shadow: 2px 2px 7px 4px rgba(0, 0, 0, 25%); border-radius: 18px; position: ${position}; top: ${top}; left: ${left}; z-index: ${zIndex}; background: gray;`;

    return image;
}
