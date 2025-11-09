import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import type {Question, Category} from "../App";
import he from "he"

interface Props {
    questions: Question[];
    selectedCategory: Category | null;
}

const DifficultyChart = ({questions, selectedCategory}: Props) => {
    const filteredQuestions = selectedCategory ? questions.filter((q: Question) => he.decode(q.category) === selectedCategory.name) : questions;
    const counts: Record<string, number> = {
        easy: 0,
        medium: 0,
        hard: 0
    };

    filteredQuestions.forEach((q: Question) => {
        counts[q.difficulty]++;
    });

    const data = [
        {name: "Easy", count: counts.easy, color: "#40de7b"},
        {name: "Medium", count: counts.medium, color: "#fccf24"},
        {name: "Hard", count: counts.hard, color: "#ee3434"},
    ].filter((difficulty) => difficulty.count > 0);

    return (
        <ResponsiveContainer width="100%" height={300} className='dark:text-transparent'>
            <PieChart>
                <Pie
                    data={data}
                    labelLine={false}
                    label={({name, percent}) =>
                        `${name}: ${(percent as number * 100).toFixed(0)}%`
                    }
                    dataKey="count"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DifficultyChart;
