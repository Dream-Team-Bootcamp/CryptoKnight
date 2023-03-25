
//needs props adding 


let News = {Alt:"#", Image:"#", Date:"#",Title:"#",Text:"#",};


export default function NewsCard(News){
    return(
<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt={News.Alt}
    src={News.Image}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time datetime="2022-10-10" className="block text-xs text-gray-500">
      {News.Date}
    </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">
       {News.Title}
      </h3>
    </a>

    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
    {News.Text}
    </p>
  </div>
</article>
    )};
