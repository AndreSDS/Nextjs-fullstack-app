import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export type StartupCardType = {
    _id: number;
    _createdAt: Date;
    views: number;
    author: {
        _id: number;
        name: string;
        avatar: string;
    };
    description: string;
    category: string;
    title: string;
    image: string;
};

interface IStartupCardProps {
    post: StartupCardType;
};

export const StartupCard: React.FC<IStartupCardProps> = async ({ post: { _id, _createdAt, views, author, description, category, title, image } }: IStartupCardProps) => {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="starturp-card_date">{formatDate(_createdAt)}</p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{author?.name}</p>
                    </Link>

                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>

                <Link href={`/user/${author?._id}`}>
                    <Image src={author?.avatar} alt={title} className="rounded-full" width={48} height={48} />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">{description}</p>
                <Image src={image} alt={title} className="startup-card_img" width={600} height={400} />
            </Link>

            <div className="flex-between mt-5 gap-3">
                <Link href={`/?query=${category.toLocaleLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}