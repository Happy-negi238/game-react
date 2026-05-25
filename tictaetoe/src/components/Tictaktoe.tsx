
import { useEffect, useState } from "react"

export const Tictaktoe = () => {
    const [start, setStart] = useState<Boolean>(false);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-16 min-h-screen">
                <div className={`transition-all duration-500 ease-in-out ${start
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-95 rotate-1"
                    }`}
                >
                    {
                        start && <Boxes />
                    }
                </div>
                <button
                    onClick={() => setStart(true)}
                    className="
                    cursor-pointer
                    px-6 py-3
                    text-2xl
                    font-medium
                    tracking-wide
                    text-zinc-700
                    border-[3px]
                    border-zinc-500
                    rounded-md
                    bg-transparent
                    shadow-[4px_4px_0px_rgba(0,0,0,0.3)]
                    hover:translate-y-0.5
                    hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]
                    transition-all duration-200
                    -rotate-2"
                >
                    Start Game
                </button>
            </div>
        </>
    )
}

const Boxes = () => {
    const [toggle, setToggle] = useState<Boolean>(false);
    const [square, setSquare] = useState(new Array(9).fill(""));
    const [winner, setWinner] = useState("");
    const [winningLine, setWinningLine] = useState<number[]>([]);

    useEffect(() => {
        console.log("call useEffect");
        const filterValue = square.filter(item => item !== "");
        console.log("square: ", square);

        if (filterValue.length >= 5) {
            findWinner(square);
        }
    }, [square]);


    const cross = "X";
    const zero = "O";

    function handleValue(index: number) {
        setToggle(prev => !prev);

        setSquare(prev => {
            const newSquare = [...prev];
            newSquare[index] = toggle ? cross : zero;
            return newSquare;
        });
    }

    const boxColor = `
            w-28 h-28
            flex justify-center items-center
            text-5xl font-bold
            text-zinc-700
            cursor-pointer
            transition-all duration-200
            `;

    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    function findWinner(arr: string[]) {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
                setWinner(arr[a]);
                setWinningLine([a, b, c]);
                return;
            }
        }
    }

    function getWinningLineClass(line: number[]) {

        // Rows
        if (line.join(",") === "0,1,2")
            return "top-[52px] left-0 w-full h-[4px]";

        if (line.join(",") === "3,4,5")
            return "top-[164px] left-0 w-full h-[4px]";

        if (line.join(",") === "6,7,8")
            return "top-[276px] left-0 w-full h-[4px]";

        // Columns
        if (line.join(",") === "0,3,6")
            return "left-[52px] top-0 h-full w-[4px]";

        if (line.join(",") === "1,4,7")
            return "left-[164px] top-0 h-full w-[4px]";

        if (line.join(",") === "2,5,8")
            return "left-[276px] top-0 h-full w-[4px]";

        // Diagonal \
        if (line.join(",") === "0,4,8")
            return "w-[390px] h-[4px] rotate-45 top-[164px] -left-[28px] origin-center";

        // Diagonal /
        if (line.join(",") === "2,4,6")
            return "w-[390px] h-[4px] -rotate-45 top-[164px] -left-[28px] origin-center";

        return "";
    }

    return (
        <div className="relative w-fit mx-auto">
            <div className="
                absolute
                -top-26
                right-0
                border-[3px]
                border-zinc-600
                px-6 py-3
                rounded-sm
                text-2xl
                font-medium
                text-zinc-700
                bg-[#fafaf8]
                shadow-[4px_4px_0px_rgba(0,0,0,0.25)]
                -rotate-2
                ">
                Winner: {winner}
            </div>


            {winningLine.length > 0 && (
                <div
                    className={`absolute bg-zinc-700 rounded-full z-20
            ${getWinningLineClass(winningLine)}`}
                />
            )}

            <div className="w-fit mx-auto grid grid-cols-3">
                {square.map((item, index) => (
                    <div
                        onClick={() => handleValue(index)}
                        key={index}
                        className={`${boxColor} border-zinc-500 ${index % 3 !== 2 ? "border-r-[3px]" : ""}
                        ${index < 6 ? "border-b-[3px]" : ""}`}
                    >
                        <span className={`
                    -rotate-3 select-none
                    ${winningLine.includes(index) ? "scale-125" : ""}
                    transition-all duration-300
                    `}>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
