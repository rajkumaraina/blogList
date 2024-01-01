import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="listItemBlog">
      <div className="timeContainer">
        <h1 className="blogHeading">{title}</h1>
        <p className="blogTime">{publishedDate}</p>
      </div>
      <p className="blogtime">{description}</p>
    </li>
  )
}
export default BlogItem
