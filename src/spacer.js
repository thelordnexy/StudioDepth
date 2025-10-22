export default function Spacer (properties)
{ //we need some space from time to time :)
    var spacer = document.createElement('div');

    const { width, height, margin } = properties;

    spacer.style = `width: ${width}; height: ${height}; margin: ${margin};`;

    return spacer;
}
