"use client"
export default function Media() {

    return (
        <>
            <div className="sm:bg-amber-500 md:bg-amber-700 text-">
                <p >sm(大于640px)md(大于768px)</p>
            </div>
            <div className="max-sm:bg-amber-500 max-md:bg-amber-700 text-">
                <p >max-sm(小于640px)max-md(小于768px)</p>
            </div>
        </>

    );
}
