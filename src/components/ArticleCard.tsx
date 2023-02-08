import { FC } from "react";
import { useActions } from "../hooks/actions";

export type ArticleCardProps = {
  // art: IArticle;
  // query: string;
};

const ArticleCard: FC<ArticleCardProps> = () => {
  const { } = useActions();

  return (
    <div className="flex flex-col w-[400px] h-[530px] rounded border-solid border border-gray-300 shadow-dp-1">

    </div>
  );
};

export default ArticleCard;
