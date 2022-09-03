import {useSelector} from "react-redux";
import { RootState } from "../../store/store";

export default function Counter() {
    const contador = useSelector((state: RootState) => state.value);
    return (
        <div>
            <strong>Contador</strong>: {contador}
        </div>
    );
}