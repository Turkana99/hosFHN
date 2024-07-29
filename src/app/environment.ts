const apiUrl = 'https://api-hospital.fhn.gov.az/api/v1'; 
export const environment = {
  production: false, 
  getHomePagesUrl: `${apiUrl}/HomePages`,
  getFooterUrl: `${apiUrl}/FooterPages`,
  getDepartmentsUrl:`${apiUrl}/Departments/getListWithLang`,
  getDoctorsUrl:`${apiUrl}/Doctors/getListWithLang`,
  getNewsUrl:`${apiUrl}/News/GetLastNewsByCountWithLang`,
  getTestimonialsUrl:`${apiUrl}/FeedbackAndSuggestions`,
  getAdvertisementUrl:`${apiUrl}/Advertisements/GetLastAdvertisementsByCountWithLang`,
};
