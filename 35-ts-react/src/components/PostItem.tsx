import { PostItemType } from "../commonTypes";

interface Props {
  post: PostItemType;
}

const PostItem = (props: Props) => {
  const { post } = props;

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
