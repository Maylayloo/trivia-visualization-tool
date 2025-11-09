import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid} from "recharts";
import type {Category} from "../App";

interface CategoryBarProps {
    categories: Category[];
    selectedCategory: Category | null;
}

const CategoryChart = ({categories, selectedCategory}: CategoryBarProps) => {
    const maxCount = Math.max(...categories.map(c => c.count));
    const yMax = Math.max(1, Math.ceil(maxCount * 1.2));
    const data = selectedCategory ? categories.filter((cat: Category) => cat.name === selectedCategory.name ) : categories

    return (
        <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis domain={[0, yMax]}/>
                <Tooltip/>
                <Bar dataKey="count" radius={[8, 8, 0, 0]} maxBarSize={90}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CategoryChart;
