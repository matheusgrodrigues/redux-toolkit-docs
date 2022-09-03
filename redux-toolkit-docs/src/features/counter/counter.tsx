import {useAppSelector} from "../../hooks/hooks";
import { RootState } from "../../store/store";

export default function Counter() {
    const contador = useAppSelector((state: RootState) => state.value);
    return (
        <div>
            <strong>Contador</strong>: {contador}
        </div>
    );
}