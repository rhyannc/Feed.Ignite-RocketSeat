import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    'lol'
  ])

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {locale: ptBR,});
  const publicsheldDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true } )

  function handleCrateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {  
    setNewCommentText(event.target.value); /** Pega o valor digitado e joga para aparecer no textarea */
    event.target.setCustomValidity(''); /** zera avalidacao para liberar apos ser preenchido */
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Eu sou um campo obrigatorio');
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0 ;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publicsheldDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        if (line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p key={line.content}><a href="#" >{line.content}</a></p>
        }
       })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComent={deleteComment}/>
        })}
      </div>
    </article>
  )
}