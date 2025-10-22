export default function Button (properties, listener = null)
{
    var button = document.createElement ('button');

    const { text, id, width, height, color, font_size, font_weight, bgColor, padding, border, bdRadius, cursor } = properties;

    button.appendChild (document.createTextNode (text));
    button.id = id || `_@btn${text.split (" ").join ("")}`;

    button.style = ` width: ${width}; height: ${height}; color: ${color}; font-size: ${font_size}; font-weight: ${font_weight}; background-color: ${bgColor}; padding: ${padding}; border: ${border}; border-radius: ${bdRadius}; cursor: ${cursor}; `;

    if (listener) {
        const [type, callback] = listener;
        button.addEventListener (type, callback);
    }

    return button;
}
