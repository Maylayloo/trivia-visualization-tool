import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid} from "recharts";
import type {Category} from "../App";

interface CategoryBarProps {
    categories: Category[];
    selectedCategory: Category | null;
}

const CategoryChart = ({categories, selectedCategory}: CategoryBarProps) => {

    const data = selectedCategory ? categories.filter((cat: Category) => cat.name === selectedCategory.name ) : categories

    return (
        <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
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
