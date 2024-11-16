import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://hometown.gumlet.io/media/product/51/4773/67991/1.jpg?mode=fill&w=335&h=335&dpr=0.8',
        name: 'Sofas'
    },
    {
        image: 'https://www.ulcdn.net/images/products/868243/product/AVALONRECMOTFABDBR1S_LP.jpg?1696956366',
        name: 'Recliners'
    },
    {
        image: 'https://ii1.pepperfry.com/media/catalog/product/c/e/494x544/cera-solid-wood-6-seater-dining-set-in-honey-brown-finish-cera-solid-wood-6-seater-dining-set-in-hon-5l5v53.jpg',
        name: 'Dining Set'
    },
    {
        image: 'https://hometown.gumlet.io/media/product/35/4673/44242/1.jpg?mode=fill&w=335&h=335&dpr=0.8',
        name: 'Beds'
    },
    {
        image: 'https://ii1.pepperfry.com/media/catalog/product/t/a/236x260/talc-office-table-in-wenge-colour-by-fullstock-talc-office-table-in-wenge-colour-by-fullstock-gvjter.jpg',
        name: 'Office chairs'
    },
    {
        image: 'https://www.ulcdn.net/images/products/364901/product/Mitali_Bookshelf_LP.jpg?1628159490',
        name: 'Book Shelves'
    },
    {
        image: 'https://ii1.pepperfry.com/media/catalog/product/k/o/494x544/kosmo-carnival-2-door-wardrobe-in-melamine-finish-with-mirror-kosmo-carnival-2-door-wardrobe-in-mela-6tzyxk.jpg',
        name: 'Wardrobes'
    },
    {
        image: 'https://www.ulcdn.net/images/products/392473/product/Amalia_Shoe_Rack_Canadian_Maple_LP.jpg?1632285753',
        name: 'Shoeracks'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/storage22.jpg?w=400&dpr=1.3',
        name:'Storage Cabinets'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-8">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;