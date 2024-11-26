import { useTodoLists } from "./useTodoLists";
import fetchMock from 'jest-fetch-mock';


describe("useTodoLists hook", () => {
 

  it("should fetch todo lists successfully", async () => {
    const mockResponse = {
      status: 200,
      data: [{ id: 1, listName: "Shopping list", todos: []  }],
      error: null
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const { getLists } = useTodoLists();

    const response = await getLists();

    expect(response).toEqual({
      data: mockResponse.data,
      error: null,
    });
  });
});
