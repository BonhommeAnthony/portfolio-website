import * as React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export interface ISubmitBtnProps {}

export function SubmitBtn(props: ISubmitBtnProps) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="group h-[3rem] w-[8rem] m-auto bg-gray-900 text-white
                    flex justify-center items-center gap-2 rounded-full outline-none
                    transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950
                    active:scale-105 disabled:scale-100 disabled:bg-opacity-75 disabled:bg-gray-900"
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
                </>
            )}
        </button>
    );
}
