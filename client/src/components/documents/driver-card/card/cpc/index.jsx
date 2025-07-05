import summarizeName from "@/helpers/summarizeName";
import React from "react";

const CPC = ({ document, type }) => {
  const { from, name, surname, middlename, birthDate, to } = document;
  return (
    type === "search" && (
      <div className="w-[2480px] text-[50px] mt-[50px]">
        <h1 className="text-5xl font-bold bg-green-400 p-[50px]">
          CPC DRIVER CERTIFICATE
        </h1>
        <div className="bg-green-200 p-[50px]">
          <p className="mt-2">Awarded on {from} to </p>
          <h2 className="text-5xl font-black py-[50px]">
            {summarizeName(name, surname, middlename)}
          </h2>
          <p className="mt-2">
            born in Uzbekistan, on {birthDate} certifying qualification in the{" "}
          </p>
          <br />
          <h3 className="text-5xl font-bold">
            Certificate of Professional Competence (CPC) for Driver - CPC Driver
            International Programme
          </h3>
          <br />
          <p>
            Possession of this qualification is confirmed by the NAMANGANTRANS
            2022 LTD on its web site.
          </p>
          <p>This certificate is valid until (Code 95) the {to}</p>
          <br />
          <br />
          <p>
            This is to certify that the driver has been trained in special
            courses by the training center "NAMANGANTRANS 2022 LTD" in addition
            to the initial driver qualification and in full compliance with
            national legislation, the provisions of EU Directives 2022/2561 (
            CODE 95), TIR and international best practice. This is carried out
            in accordance with the strict criteria set by the "NAMANGANTRANS
            2022 LTD" regarding the qualification of instructors, training and
            examinations in order to ensure and ensure high professional skills
            and quality in road transport.
          </p>
          <br />
          <br />
          <p>
            Настоящим удостоверяется, что водитель прошел обучение на
            специальных курсах учебным центром «NAMANGANTRANS 2022 ООО» в
            дополнение к начальным квалификациям водителей и в попном
            соответствии с национальным законодательством. положениями Директив
            ЕС 2022/2561 (CODE 95). МДП и передовой международной практики. Это
            проводится в соответствии со строгими критериями, установленными
            «NAMANGANTRANS 2022 ООО» в отношении квалификации инструкторов,
            обучения и экзаменов, чтобы обеспечить высокие профессиональные
            навыке и хочество на автомобильном транспорте.
          </p>
        </div>
      </div>
    )
  );
};

export default CPC;
