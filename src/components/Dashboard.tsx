import CategoryChart from "./CategoryChart.tsx";
import type { Category, Question } from "../App"
import DifficultyChart from "./DifficultyChart.tsx";

interface Props {
    questions: Question[]
    categories: Category[],
    selectedCategory: Category | null,
}

const Dashboard = ({questions, categories, selectedCategory}: Props) => {
    return (
        <section className={`flex gap-4 flex-col ${selectedCategory ? "md:flex-row" : ""}`}>
            <div className='card'>
                <h2 className='mb-12'>
                    {selectedCategory ? `${selectedCategory.name}` : 'All categories'}
                </h2>
                <CategoryChart categories={categories} selectedCategory={selectedCategory} />
            </div>
            <div className='card'>
                <h2 className='mb-12'>
                    {selectedCategory ? `${selectedCategory.name}` : 'All categories'}: difficulty distribution
                </h2>
                <DifficultyChart questions={questions} selectedCategory={selectedCategory} />
            </div>

        </section>
    );
};

export default Dashboard;