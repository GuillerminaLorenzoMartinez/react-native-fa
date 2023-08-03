const { fetchData } = require("../../utils/fetchLastSix");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        sampleData: "This is a sample response",
      }),
  })
) as jest.Mock<Promise<Response>>;

describe("fetchData", () => {
  it("should return the sample data", async () => {
    const data = await fetchData();

    expect(data).toEqual({
      sampleData: "This is a sample response",
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://fundingawards.nihr.ac.uk/api/latest/6"
    );
  });

  it("should throw an error if fetch fails", async () => {
    const errorMessage = "Failed to fetch data";

    global.fetch = jest.fn(() =>
      Promise.reject(new Error(errorMessage))
    ) as jest.Mock<Promise<Response>>;

    await expect(fetchData()).rejects.toThrowError(errorMessage);
  });
});
