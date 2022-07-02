import { Spinner } from "react-bootstrap";

export default function LoadingSpinner() {
    return (
        <div className="spinner">
            <Spinner variant="primary" animation="border" />
        </div>
    )
}
