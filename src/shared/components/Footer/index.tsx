import { FiCopy } from 'react-icons/fi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { matchPath, useLocation } from 'react-router-dom';
import { CONTACT_EMAIL } from '@/app/constants/email';
import { ROUTE_PATH } from '@/app/constants/routerPath';
import { SPONSOR_ACCOUNT } from '@/app/constants/sponsor';
import { Modal } from '@/shared/components/Modal';
import { useModal } from '@/shared/hooks/useModal';
import { toast } from '@/shared/utils/toast';
import * as S from './index.styled';

const Footer = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { pathname } = useLocation();
  // admin 페이지(/admin 하위)와 지원 폼 페이지에서는 후원 봉투를 노출하지 않는다.
  const hideSponsor =
    pathname.startsWith('/admin') ||
    matchPath(`/${ROUTE_PATH.USER.APPLICATION}`, pathname) !== null;

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(SPONSOR_ACCOUNT.number);
      toast.success('계좌번호가 복사되었습니다.');
    } catch {
      toast.error('계좌번호 복사에 실패했습니다.');
    }
  };

  return (
    <S.Container>
      <S.Email href={`mailto:${CONTACT_EMAIL}`}>Contact : {CONTACT_EMAIL}</S.Email>
      <S.Copyright>© {new Date().getFullYear()} Dongarium. All rights reserved.</S.Copyright>

      {!hideSponsor && (
        <>
          <S.Sponsor>
            <S.Envelope
              isOpen={isOpen}
              role='button'
              tabIndex={0}
              aria-haspopup='dialog'
              aria-expanded={isOpen}
              aria-label='후원 안내 열기'
              onClick={openModal}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal();
                }
              }}
            >
              <S.EnvelopeBack aria-hidden />
              <S.EnvelopeFrontShade aria-hidden />
              <S.EnvelopeFront aria-hidden />
              <S.Flap isOpen={isOpen} aria-hidden />
            </S.Envelope>
          </S.Sponsor>

          <Modal isOpen={isOpen} onClose={closeModal} size='md'>
            <S.SponsorHeartIcon aria-hidden>
              <HiOutlineHeart />
            </S.SponsorHeartIcon>
            <S.SponsorTitle>
              도움이 되셨다면,
              <br />
              후원으로 동아리움 운영을 지속하게 도와주세요!
            </S.SponsorTitle>
            <S.SponsorSubText>
              이 콘텐츠가 계속 무료로 유지되는 건 후원자 덕분입니다. 함께해 주세요.
            </S.SponsorSubText>

            <S.AccountRow>
              <S.AccountInfo>
                <S.AccountBank>
                  {SPONSOR_ACCOUNT.bank} · {SPONSOR_ACCOUNT.holder}
                </S.AccountBank>
                <S.AccountNumber>{SPONSOR_ACCOUNT.number}</S.AccountNumber>
              </S.AccountInfo>
              <S.CopyButton
                type='button'
                onClick={handleCopyAccount}
                aria-label='후원 계좌번호 복사'
              >
                <FiCopy />
                복사
              </S.CopyButton>
            </S.AccountRow>
          </Modal>
        </>
      )}
    </S.Container>
  );
};

export default Footer;
