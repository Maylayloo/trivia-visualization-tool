import CategoriesList from "./components/CategoriesList.tsx";
import Header from "./components/Header.tsx";
import {useEffect, useRef, useState} from "react";
import Dashboard from "./components/Dashboard.tsx";

interface Question {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface Category {
    name: string,
    color: string,
    count: number,
}

const App = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [questions, setQuestions] = useState<Question[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const fetchedRef = useRef(false);

    const getColor = (index: number, total: number) => {
        const hue = (index * 360) / total;

        return `hsl(${hue}, 70%, 55%)`;
    }

    useEffect(() => {

        if (fetchedRef.current) return; // TEMPORARY: DEV MODE
        fetchedRef.current = true; // TEMPORARY:  DEV MODE

        const getData = async () => {
            const url = 'https://opentdb.com/api.php?amount=50'
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }

                const result = await response.json()

                if (result && result.results) {
                    setQuestions(result.results)

                    const categoryCounts: Record<string, number> = {}

                    result.results.forEach((q: Question) => {
                        categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1
                    })

                    const categoriesArr: Category[] = Object.entries(categoryCounts).map(
                        ([name, count], index, array) => ({
                            name,
                            count,
                            color: getColor(index, array.length)
                        })
                    )

                    setCategories(categoriesArr)

                }
                // TEMPORARY: just for dev
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error){
                alert("Please slow down")
            } finally {
                setLoading(false)
            }


        }

        getData()
    }, [])

    if (loading) return;

    return (
        <main className="mt-12 flex flex-col gap-8">
            <Header/>
            <CategoriesList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
        </main>
    );
};

export default App;