import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
dayjs.locale("pt-br");

interface IContent {
  type: "paragraph" | "link";
  content: string;
}

export interface IPostProps {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  publishAt: Date;
  content: IContent[];
}
interface IPost {
  post: IPostProps;
}

export function Post({ post }: IPost) {
  const publishedDateFormatted = dayjs(post.publishAt).format(
    "[d]i[a] DD [d]e  MMMM, YYYY"
  );
  const [comments, setComments] = useState([
    "Cara muito massa o seu feed",
    "muito show mano",
    "simplesmente algo já feito",
  ]);
  const [actualComment, setActualComment] = useState("");

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommnetInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("este campo é obrigatório");
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setActualComment("");
    setComments([...comments, actualComment]);
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setActualComment(event.target.value);
  }

  const isActualCommentIsEmpty = actualComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}></Avatar>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="2022-05-11 8:13:38">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line, id) => {
          if (line.type === "paragraph") {
            return <p key={`line-${id}`}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={`line-${id}`}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu Feedback</strong>
        <textarea
          name="comment"
          value={actualComment}
          onChange={handleNewCommentChange}
          placeholder="Deixe o seu comentário"
          onInvalid={handleNewCommnetInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isActualCommentIsEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
