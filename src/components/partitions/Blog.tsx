import blog_one from "../../assets/png/blog_one.png";
import blog_two from "../../assets/png/blog_two.png";
import blog_three from "../../assets/png/blog_three.png";
import chandler from "../../assets/png/chandler.png";
import green from "../../assets/png/green.png";
import geller from "../../assets/png/geller.png";

const blogData = [
  {
    coverImg: blog_one,
    title: "Cool feature title",
    description: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bling",
    authorImg: chandler,
  },
  {
    coverImg: blog_two,
    title: "Cool feature title",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Rachel Green",
    authorImg: green,
  },
  {
    coverImg: blog_three,
    title: "Cool feature title",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition.",
    author: "Monica Geller",
    authorImg: geller,
  },
];

const BlogCard = ({
  coverImg,
  title,
  description,
  author,
  authorImg,
}: {
  coverImg: string;
  title: string;
  description: string;
  author: string;
  authorImg: string;
}) => (
  <div>
    <img src={coverImg} alt={title} className="mb-4" />
    <div className="flex justify-between">
      <p className="font-semibold">Category</p>
      <p className="text-customGray">November 22, 2021</p>
    </div>
    <p className="text-customGray pt-3 pb-6 h-[100px]">{description}</p>
    <div className="flex items-center space-x-3">
      <img src={authorImg} alt={author} className="w-10 h-10 rounded-full" />
      <p className="text-gray-800 font-medium">{author}</p>
    </div>
  </div>
);

const Blog = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-customGray">Our Blog</h2>
        <h3 className="text-[48px] manrope max-w-[900px] mx-auto py-8">
          Value proposition accelerator product management venture
        </h3>
      </div>
      <div className="grid grid-cols-3 max-w-[1000px] gap-12 mx-auto">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            coverImg={blog.coverImg}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            authorImg={blog.authorImg}
          />
        ))}
      </div>
      <div className="flex items-center justify-center pt-16">
        <button
          className="rounded-full border-2 border-customNavy px-12 py-4"
          role="link"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Blog;
