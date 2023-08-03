import { getAwardsDetails, AwardDetails } from "../../utils/getAwardsDetails";

describe("getAwardsDetails", () => {
  it("should return an array of AwardDetails when data contains documents", () => {
    const data = {
      documents: [
        {
          id: "NIHR204992",
          award_type: "Research",
          award_title:
            "Understanding and optimising hospital outpatient services for people living with dementia: an ethnographic and intervention development study",
          contracting_org: "Leeds Teaching Hospitals NHS Trust",
          start_date: "2024-03-01T23:59:59.000+0000",
          lead_investigator_name: "Dr Rachael Kelley",
        },
        {
          id: "NIHR153577",
          award_type: "Research",
          award_title:
            "The Monoclonal Antibody Medications in inflammatory Arthritis: stopping or continuing in pregnancy (MAMA) trial",
          contracting_org: "University of Oxford",
          start_date: "2024-03-01T23:59:59.000+0000",
          lead_investigator_name: "Professor Marian Knight",
        },
      ],
    };

    const result: AwardDetails[] = getAwardsDetails(data);

    expect(Array.isArray(result)).toBe(true);

    expect(result.length).toBe(data.documents.length);

    result.forEach((item) => {
      expect(item).toMatchObject<AwardDetails>({
        id: expect.any(String),
        title: expect.any(String),
        type: expect.any(String),
        startDate: expect.any(String),
        contractingOrg: expect.any(String),
        investigatorName: expect.any(String),
      });
    });

    expect(result[0]).toEqual({
      id: "NIHR204992",
      title:
        "Understanding and optimising hospital outpatient services for people living with dementia: an ethnographic and intervention development study",
      type: "Research",
      startDate: "March 2024",
      contractingOrg: "Leeds Teaching Hospitals NHS Trust",
      investigatorName: "Dr Rachael Kelley",
    });

    expect(result[1]).toEqual({
      id: "NIHR153577",
      title:
        "The Monoclonal Antibody Medications in inflammatory Arthritis: stopping or continuing in pregnancy (MAMA) trial",
      type: "Research",
      startDate: "March 2024",
      contractingOrg: "University of Oxford",
      investigatorName: "Professor Marian Knight",
    });
  });

  it("should return an empty array when data does not contain documents", () => {
    const data = { documents: [] };

    const result: AwardDetails[] = getAwardsDetails(data);

    expect(result).toEqual([]);
  });
});
