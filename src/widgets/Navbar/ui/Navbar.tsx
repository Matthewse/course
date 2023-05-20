import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                // size={ButtonSize.XL}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}

            </Button>
            <Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                veniam harum distinctio eligendi esse nam excepturi placeat,
                alias facilis, maiores enim nostrum eaque omnis modi
                repellendus, eum rem architecto velit
            </Modal>
        </div>
    );
};
