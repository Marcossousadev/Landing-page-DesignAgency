import Image from "next/image";
import ImageGoogle from "./assets/imgs-company/logos_google.png";
import ImageTrello from "./assets/imgs-company/Trello-logo-blue 1.png";
import ImageMonday from "./assets/imgs-company/logos_monday.png";
import ImageNotion from "./assets/imgs-company/Notion.png";
import ImageSlack from "./assets/imgs-company/Slack.png";

const images = [
    {
        src: ImageGoogle,
        alt: "Google"
    },
    {
        src: ImageTrello,
        alt: "Trello",
    },
    {
        src: ImageMonday,
        alt: "Monday",
    },
    {
        src: ImageNotion,
        alt: "Notion",
    },
    {
        src: ImageSlack,
        alt: "Slack",
    }
];

export function ListCompany() {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 bg-[#f5f5f5] w-full gap-1">
           {
            images.map((item, index) => (
                <Image key={index} src={item.src} alt={item.alt} className={
                    `w-20 h-10 object-contain m-4 ${
                        index === 3 ? "col-start-1 justify-self-end" : ""
                    } ${
                        index === 4 ? "col-start-2 justify-self-start" : ""
                    }`
                } />
            ))
           }
        </div>
        </div>
    );
}