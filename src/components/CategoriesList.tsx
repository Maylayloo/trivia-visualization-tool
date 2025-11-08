import type {Category} from "../App";

interface Props {
    categories: Category[],
    selectedCategory: string | null,
    onSelectCategory: (category: string | null) => void
}

const CategoriesList = ({categories, selectedCategory, onSelectCategory}: Props) => {
    return (
        <section id='categories' className="card">
            <h2>Categories</h2>
            <div className="flex gap-2">

                <div
                    className='px-1.5 py-0.5 rounded-lg border cursor-pointer'
                    onClick={() => onSelectCategory(null)}
                    style={{
                        backgroundColor: selectedCategory ? undefined : "black",
                        color: selectedCategory ? undefined : "white",
                    }}
                >
                    All categories ({categories.reduce((sum, cat) => sum + cat.count, 0)})
                </div>

                {
                    categories.map((category: Category) => {
                        return <div
                            key={category.name}
                            style={{
                                backgroundColor: selectedCategory === category.name ? category.color : "transparent",
                                color: selectedCategory === category.name ? "white" : undefined,
                                borderColor: category.color,
                            }}
                            className='px-1.5 py-0.5 rounded-lg border cursor-pointer'
                            onClick={() => {onSelectCategory(category.name)}}
                        >
                            {category.name} ({category.count})
                        </div>
                    })
                }
            </div>

        </section>
    );
};

export default CategoriesList;