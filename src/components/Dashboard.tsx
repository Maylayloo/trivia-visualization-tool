import CategoryChart from "./CategoryChart.tsx";
import type { Category } from "../App"

interface Props {
    categories: Category[],
    selectedCategory: Category | null,
}

const Dashboard = ({categories, selectedCategory}: Props) => {
    return (
        <section className='flex flex-col gap-4'>
            <div className='card'>
                <h2 className='mb-12'>
                    {selectedCategory ? `${selectedCategory.name}` : 'All categories'}
                </h2>
                <CategoryChart categories={categories} selectedCategory={selectedCategory} />
            </div>

        </section>
    );
};

export default Dashboard;