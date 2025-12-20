import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import RegistrationForm from "../components/RegistrationForm";
import Test from "../tests/Test";
import Test1 from "../tests/Listening/Test1";
import Test2 from "../tests/Reading/Test2";
import Test3 from "../tests/Writing/Test3";
import Test4 from "../tests/Speaking/Test4";
import Lpart1 from "../tests/Listening/Part1/Lpart1";
import Lpart6 from "../tests/Listening/Part6/Lpart6";
import Lpart5 from "../tests/Listening/Part5/Lpart5";
import Lpart4 from "../tests/Listening/Part4/Lpart4";
import Lpart3 from "../tests/Listening/Part3/Lpart3";
import Lpart2 from "../tests/Listening/Part2/Lpart2";
import Rpart1 from "../tests/Reading/Part1/Rpart1";
import Rpart5 from "../tests/Reading/Part5/Rpart5";
import Rpart4 from "../tests/Reading/Part4/Rpart4";
import Rpart3 from "../tests/Reading/Part3/Rpart3";
import Rpart2 from "../tests/Reading/Part2/Rpart2";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/registr" element={<RegistrationForm />} />

            <Route path="/test" element={<Test />}>
                <Route path="test1" element={<Test1 />} >
                    <Route path="part1" element={<Lpart1 />} />
                    <Route path="part2" element={<Lpart2 />} />
                    <Route path="part3" element={<Lpart3 />} />
                    <Route path="part4" element={<Lpart4 />} />
                    <Route path="part5" element={<Lpart5 />} />
                    <Route path="part6" element={<Lpart6 />} />
                </Route>
                <Route path="test2" element={<Test2 />} >
                    <Route path="part1" element={<Rpart1 />} />
                    <Route path="part2" element={<Rpart2 />} />
                    <Route path="part3" element={<Rpart3 />} />
                    <Route path="part4" element={<Rpart4 />} />
                    <Route path="part5" element={<Rpart5 />} />
                </Route>
                <Route path="test3" element={<Test3 />} />
                <Route path="test4" element={<Test4 />} />
            </Route>

        </Routes>
    );
}
