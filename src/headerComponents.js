export default function Nav (properties, dependencyComponent) //Nav Component
{
    var nav = document.createElement ('nav');

    const { display, width, height, bgColor, backDrop, padding, margin, alignItems, justifyContent, border, bdRadius } = properties;


    nav.style = ` display: ${display}; width: ${width}; height: ${height}; background-color: ${bgColor}; backdrop-filter: ${backDrop}; padding: ${padding}; margin: ${margin}; align-items: ${alignItems}; justify-content: ${justifyContent}; border: ${border}; border-radius: ${bdRadius}; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);`;

    nav.appendChild(Brand ());

    nav.appendChild (NavList ([
        "Home", "Exhibitions", "Artist", "Popular", "About Us", "Contact"
    ], {
        display: "flex",
        width: "624px",
        fontSize: "16px",
        fontWeight: 400,
        alignItems: "center",
        justifyContent: "space-evenly",
    }));


    nav.appendChild(dependencyComponent.ButtonComponent ({
        text: "Get Started",
        width: "163.63px",
        height: "40px",
        color: "#FFFFFF",
        font_size: "16px",
        font_weight: 400,
        bgColor: "#010101",
        padding: "10px 18px",
        border: "0px",
        bdRadius: "6px",
        cursor: "pointer"
    }));

    return nav;
}

function Brand () //Brand Component
{
    var brand = document.createElement('brand');

    brand.style = ` width: 169px; height: 40px; font-size: 30px; font-weight: 900; color: #010101; font-family: Playfair Display; `;

    brand.appendChild(document.createTextNode("StudioDepth"));

    return brand;
}

function NavList (items, properties) //Nav List Component
{
    var navList = document.createElement ('ul');

    const { display, width, height, fontSize, fontWeight, bgColor, padding, margin, alignItems, justifyContent, border, bdRadius } = properties;


    navList.style = ` display: ${display}; width: ${width}; height: ${height}; background-color: ${bgColor}; padding: ${padding}; margin: ${margin}; align-items: ${alignItems}; justify-content: ${justifyContent};  border: ${border}; border-radius: ${bdRadius}; `;


    for (var i = 0; i < items.length; ++i) {

        var listItem = document.createElement ('li');
        var listItemLink = document.createElement ('a');


        listItemLink.appendChild (document.createTextNode (items[i]));
        listItemLink.href = "#";
        listItemLink.style = ` text-decoration: none; color: #010101; font-size: ${fontSize}; font-weight: ${fontWeight}; `;

        listItem.appendChild (listItemLink);
        listItem.className = "navListItem";
        listItem.style = ` list-style: none; `;

        navList.appendChild(listItem);

    }

    return navList;
}
