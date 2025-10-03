import { Certificate, PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { CertificatesPage } from "../assets/assets.js";

const Certificates = () => {
  return (
    <>
      {(CertificatesPage && CertificatesPage.length > 0) && (
        <div id="Certificates" className={`${containerStyle}`}>
          <PageTitle title={"Certifications"} />
          <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-4">
            {CertificatesPage.map(({ year, title, issuedBy, credentialURL }, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 bg-mainColor text-white rounded-md p-5 bedar-sc2:p-8 shadow-md shadow-[#000]/15"
              >
                <div>
                  <div>{year}</div>
                  <div className="mt-1 font-bold">{title}</div>
                </div>
                {issuedBy && (
                  <div className="font-bold cursor-pointer" title={`issued by ${issuedBy}`}>{issuedBy}</div>
                )}
                {credentialURL && (
                  <a href={credentialURL} className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">View Credential</a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
