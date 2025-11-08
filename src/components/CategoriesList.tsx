import type {Category} from "../App";

interface Props {
    categories: Category[],
    selectedCategory: Category | null,
    onSelectCategory: (category: Category | null) => void
}

const CategoriesList = ({categories, selectedCategory, onSelectCategory}: Props) => {
    return (
        <section id='categories' className="card">
            <h2>Categories</h2>
            <div className="flex gap-2 flex-wrap">

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
                                backgroundColor: selectedCategory?.name === category.name ? category.color : "transparent",
                                color: selectedCategory?.name === category.name ? "white" : undefined,
                                borderColor: category.color,
                            }}
                            className='px-1.5 py-0.5 rounded-lg border cursor-pointer whitespace-nowrap'
                            onClick={() => {onSelectCategory(category)}}
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