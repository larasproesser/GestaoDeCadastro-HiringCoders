import React from 'react';
import * as S from './styled';

const Rodape = () => {
    return (
        <S.Rodape>
            <S.Assinatura>
            © Developed by Lara Sproesser | 2021
            </S.Assinatura>
            <S.Links>
                <S.Link href='https://github.com/larasproesser'>
                    <i className='bi bi-github'></i>
                </S.Link>
                <S.Link href='https://www.linkedin.com/in/lara-sproesser-ferreira-a10755145/'>
                    <i className='bi bi-linkedin'></i>
                </S.Link>
            </S.Links>
            </S.Rodape>
    );
};

export default Rodape;