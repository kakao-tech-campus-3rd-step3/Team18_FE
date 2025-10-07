import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import DatePicker from 'react-datepicker';
import * as S from './index.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext, Controller } from 'react-hook-form';

export const ClubInfoSidebarEditSection = () => {
  const {
    register,
    control,
    getValues,
    formState: { errors },
  } = useFormContext<{
    presidentName: string;
    presidentPhoneNumber: string;
    location: string;
    recruitStart: Date | null;
    recruitEnd: Date | null;
    regularMeetingInfo: string;
    applicationNotice: string;
  }>();

  return (
    <S.SidebarContainer>
      <S.InfoItem>
        <span>회장 이름:</span>
        <UnderlineInputField
          {...register('presidentName', { required: '회장 이름을 입력해주세요.' })}
          invalid={!!errors.presidentName}
          message={errors.presidentName?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>연락처:</span>
        <UnderlineInputField
          {...register('presidentPhoneNumber', { required: '연락처를 입력해주세요.' })}
          invalid={!!errors.presidentPhoneNumber}
          message={errors.presidentPhoneNumber?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>동방 위치:</span>
        <UnderlineInputField
          {...register('location', { required: '동방 위치를 입력해주세요.' })}
          invalid={!!errors.location}
          message={errors.location?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>모집 시작일:</span>
        <Controller
          control={control}
          name="recruitStart"
          rules={{ required: '모집 시작일을 선택해주세요.' }}
          render={({ field, fieldState }) => (
            <DatePicker
              selected={field.value ?? undefined}
              onChange={(date) => field.onChange(date)}
              onBlur={field.onBlur}
              dateFormat="yyyy/MM/dd"
              customInput={<UnderlineInputField invalid={!!fieldState.error} message={fieldState.error?.message} />}
            />
          )}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>모집 마감일:</span>
        <Controller
          control={control}
          name="recruitEnd"
          rules={{ required: '모집 마감일을 선택해주세요.' }}
          render={({ field, fieldState }) => (
            <DatePicker
              selected={field.value ?? undefined}
              onChange={(date) => field.onChange(date)}
              onBlur={field.onBlur}
              minDate={getValues('recruitStart') ?? undefined}
              dateFormat="yyyy/MM/dd"
              customInput={<UnderlineInputField invalid={!!fieldState.error} message={fieldState.error?.message} />}
            />
          )}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>정기 모임:</span>
        <UnderlineInputField
          {...register('regularMeetingInfo', { required: '정기 모임 정보를 입력해주세요.' })}
          invalid={!!errors.regularMeetingInfo}
          message={errors.regularMeetingInfo?.message}
        />
      </S.InfoItem>

      <S.InfoItem>
        <span>지원 시 유의사항:</span>
        <UnderlineInputField
          {...register('applicationNotice', { required: '지원 시 유의사항을 입력해주세요.' })}
          invalid={!!errors.applicationNotice}
          message={errors.applicationNotice?.message}
        />
      </S.InfoItem>
    </S.SidebarContainer>
  );
};
