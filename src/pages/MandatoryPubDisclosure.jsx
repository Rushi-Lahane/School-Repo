import React from 'react'
import CommonTopBanner from '../Component/CommonTopBanner'

const MandatoryPubDisclosure = () => {

  const Tables = [
    {
      title: "A. GENERAL INFORMATION",
      heading: ["Sr.No", "Information", "Details"],
      data: [
        ["1", "NAME OF THE SCHOOL", "Bhondawe Patil Public School"],
        ["2", "AFFILIATION NO.", "1131092"],
        ["3", "SCHOOL CODE", "31078"],
        ["4", "COMPLETE ADDRESS WITH PIN CODE", "Gut no. 49/52-2 opposite Dwarkanagari, Wadgaonko Bajajnagar Aurangabad"],
        ["5", "PRINCIPAL NAME", "Mr. Manoj Ashok Savale"],
        ["6", "SCHOOL EMAIL ID", "bhondawepatilschool@gmail.com"],
        ["7", "CONTACT DETAILS (LANDLINE/MOBILE)", "6232616161, 6232717171"],
      ],
    },
    {
      title: "B: DOCUMENTS AND INFORMATION",
      heading: ["Sr.No.", "DOCUMENTS/ INFORMATION", "UPLOAD DOCUMENTS"],
      data: [
        ["1", "COPIES OF AFFILIATION/ UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["2", "COPIES OF SOCIETIES/ TRUST/ COMPANY REGISTRATION/ RENEWAL CERTIFICATE, AS APPLICABLE", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["3", "COPY OF THE NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./ UT ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["4", "Teachers Details 2024-2025 ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["5", "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["6", "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER NATIONAL BUILDING CODE ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["7", "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["8", "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/ UPGRADATION/ EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY THE SCHOOL ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["9", "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["10", "LAND CERTIFICATE ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["11", "FIRE CERTIFICATE ", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["12", "WATER CERTIFICATE", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
      ],
    },
    {
      title: "C: RESULTS AND ACADEMICS",
      heading: ["Sr.No.", "DOCUMENTS/ INFORMATION", "UPLOAD DOCUMENTS"],
      data: [
        ["1", "FEE STRUCTURE OF THE SCHOOL", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["2", "ANNUAL ACADEMIC CALENDAR", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["3", "SCHOOL MANAGEMENT COMMITTEE (SMC)", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["4", "PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view the document</a>],
        ["5", "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILIT", <a href="#" className='text-blue-700 font-semibold hover:text-red-600'>Click here to view Result </a>],
      ],
    },
    {
      title: "RESULT CLASS: X",
      heading: ["Sr. No.", "Year", "No.Of Registered Students", "No. Of Students Passed", "Pass Percentage", "Remarks"],
      data: [
        ["1", "2023-24", "38", "38", "100", "-"],
        ["1", "2023-24", "38", "38", "100", "-"],
      ],
    },
    {
      title:"RESULT CLASS: XII     Not applicable",
      heading: [],
      data:[],
    },
    {
      title:"D: STAFF AND TEACHING",
      heading: ["Sr.No.", "INFORMATION", "Details"],
      data:[
        ["1",	"PRINCIPAL",	"1"],
        ["2",	"VICE-PRINCIPAL	",	"1"],
        ["3",	"NUMBER OF TEACHERS	",	"61"],
        ["4",	"II. TGT	",	"25"],
        ["5",	"II. PRT	",	"19"],
        ["6",	"III. NTT	",	"9"],
        ["7",	"PET",	"3"],
        ["8",	"TEACHER/ SECTION RATIO	",	"1.5"],
        ["9",	"SPECIAL EDUCATOR DETAIL	",	"1"],
        ["10","COUNSELLOR AND WELLNESS DETAILS	",	"1"],
        ["11","Others	",	"1"],
      ]
    },
    {
      title:"E: SCHOOL INFRASTRUCTURE",
      heading: ["Sr.No.", "INFORMATION", "Details"],
      data:[
        ["1","TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR.)","6000"],
        ["2","NUMBER AND SIZE OF CLASS ROOMS (IN SQUARE MTR.)","48 (500 Sq.Ft)"],
        ["3","NUMBER OF LARGE LABS INCLUDING COMPUTER LABS (IN SQUARE MTR.)","7 (600 Sq.Ft"],
        ["4","INTERNET FACILITY (Y/N)","Yes"],
        ["5","NUMBER OF GIRL’S TOILETS","20"],
        ["6","NUMBER OF BOY’S TOILETS","20"],
        ["7","LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",<a href="https://www.youtube.com/watch?v=VMjF1DnI_so&t=70s" className='text-blue-700 font-semibold hover:text-red-600'>youtube link</a>]
      ]
    },
  ]

  return (
    <>
      <CommonTopBanner title='Mandatory Public Disclosure' />
      <div className='bg-gray-100 sm:p- p-3'>


        <div className='container mx-auto sm:w-230 w-full mt-10 '>
          <div className='bg-white h-35  rounded-md shadow-md flex items-center justify-center'>
            <h2 className='text-blue-900 text-3xl font-bold'>Mandatory Public Disclosure APPENDIX - IX</h2>
          </div>

          {/* Tabel  */}
          {/* Render first 2 tables */}
          {Tables.slice(0, 2).map((table, index) => (
            <div key={index} className='bg-white my-7 shadow-md rounded-md overflow-x-auto'>
              <table className='w-full border-collapse border border-blue-800'>
                <caption className="text-xl font-bold py-2 text-left text-blue-900 ml-2">
                  {table.title}
                </caption>
                <thead>
                  <tr>
                    {table.heading.map((header, index) => (
                      <th key={index} className='border p-1.5'>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className='border p-1.5'>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {/*Note */}
          <div className="bg-[#d1ecf1] p-3 shadow-md  ">
            NOTE: THE SCHOOLS NEED TO UPLOAD THE SELF-ATTESTED COPIES OF THE ABOVE LISTED DOCUMENTS BY CHAIRMAN/ MANAGER/ SECRETARY AND PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
          </div>

          {/* Render the remaining tables */}
          {Tables.slice(2).map((table, index) => (
            <div key={index} className='bg-white my-7 shadow-md rounded-md overflow-x-auto'>
              <table className='w-full border-collapse border border-blue-800'>
                <caption className="text-xl font-bold py-2 text-left text-blue-900 ml-2">
                  {table.title}
                </caption>
                <thead>
                  <tr>
                    {table.heading.map((header, i) => (
                      <th key={i} className='border p-1.5'>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className='border p-1.5'>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MandatoryPubDisclosure