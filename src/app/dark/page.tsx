"use client"
export default function Dark() {
    const _c = ()=>{
        const c:boolean = document.body.classList.toggle('dark');
        if(c){
            console.log("remove")
            document.documentElement.classList.remove('dark');

        }else{
            console.log("add")
            document.documentElement.classList.add('dark');
        }
    }
    return (
        <>
            <div className="bg-white dark:bg-black text-black dark:text-red-500">
                dark
            </div>
            <button onClick={_c}>change page</button>
        </>

    );
}
