import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface IComment {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: IComment) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/69198104?v=4"
        alt=""
      ></Avatar>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Neves</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 8:13:38">
                publicado a 1h
              </time>

              {content}
            </div>

            <button title="Deletar comentario" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p></p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            aplaudir <span></span> {likeCount}
          </button>
        </footer>
      </div>
    </div>
  );
}
