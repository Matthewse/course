import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/ui/Button';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => setError(true);

    return <Button onClick={onThrow}>throw error</Button>;
};
