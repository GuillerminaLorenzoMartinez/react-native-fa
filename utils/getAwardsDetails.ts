interface AwardDetails {
  id: string;
  title: string;
  type: string;
  startDate: string;
  contractingOrg: string;
  investigatorName: string;
}

export function getAwardsDetails(data: any): AwardDetails[] {
  return data.documents.map((document: any) => {
    const id = document.id;
    const title = document.award_title;
    const type = document.award_type;
    const startDate = new Date(document.start_date).toLocaleDateString(
      "en-US",
      { month: "long", year: "numeric" }
    );
    const contractingOrg = document.contracting_org;
    const investigatorName = document.lead_investigator_name;

    return {
      id,
      title,
      type,
      startDate,
      contractingOrg,
      investigatorName,
    };
  });
}
