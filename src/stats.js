export default function Stats ()
{//all ya ratings et shit :)
    var stats = document.createElement ('stats');
    stats.style = "display: grid; width: 316.29px; height: 66.13px; grid-template-columns: auto auto auto; justify-content: start;";

    stats.appendChild (Stat ({
        statValueText:"20K",
        statDescriptionText:"Orders Delivered",
    }));

    stats.appendChild (Stat ({
        statValueText:"4.9/5.0",
        statDescriptionText:"Collectors Satisfaction",
    }));

    stats.appendChild (Stat ({
        statValueText:"150K",
        statDescriptionText:"Monthly Visitors",
    }));

    return stats;

}

function Stat  (properties)
{
    var stat = document.createElement('div');
    var statValue = document.createElement ('h2');
    var statDescription = document.createElement ('h3');

    const { statValueText, statDescriptionText } = properties;

    statValue.appendChild (document.createTextNode (statValueText));
    statDescription.appendChild (document.createTextNode (statDescriptionText));

    statValue.style = statDescription.style = "width: 105.43px; text-align: start; font-size: 21px; font-weight: 900; letter-spacing: 0.5px;";
    statDescription.style = statDescription.style = "width: 105.43px; text-align: start; /*margin: auto;*/ font-size: 14px; font-weight: 400; letter-spacing: 0.5px; overflow-wrap: break-word;";

    stat.appendChild(statValue);
    stat.appendChild(statDescription);

    return stat;
}
