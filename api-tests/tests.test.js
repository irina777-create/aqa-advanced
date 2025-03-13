import axios from 'axios';

let axiosInstance;
const baseUrl = 'https://restful-api.dev';

beforeAll(() => {
    axiosInstance = axios.create({
        baseURL: baseUrl,
        validateStatus: () => true,
    });
});

describe('API Tests for restful-api.dev', () => {
    let resourceId;
  // Positive Test :Post
    test('POST: Create a new resource', async () => {
        const response = await axiosInstance.post('/objects', {
            name: 'Test Book',
            data: { author: 'John Doe', year: 2025 }
        });

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id');
        expect(response.data.name).toBe('Test Book');
        resourceId = response.data.id;
    });

    // Negative Test: Post
    test('POST: Fail to create resource with invalid data', async () => {
        const response = await axiosInstance.post('/objects', {
            invalidField: 'Invalid Data'
        });

        expect(response.status).toBe(400);
    });

    // Positive Test: Get
    test('GET: Retrieve created resource', async () => {
        const response = await axiosInstance.get(`/objects/${resourceId}`);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('name', 'Test Book');
    });

    // Negative Test: Get
    test('GET: Fail to retrieve non-existing resource', async () => {
        const response = await axiosInstance.get('/objects/non-existing-id');
        expect(response.status).toBe(404);
    });

    // Positive Test: Put
    test('PUT: Update existing resource', async () => {
        const response = await axiosInstance.put(`/objects/${resourceId}`, {
            name: 'Updated Test Book',
            data: { author: 'Jane Doe', year: 2026 }
        });

        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Updated Test Book');
    });

    // Negative Test: Put
    test('PUT: Fail to update non-existing resource', async () => {
        const response = await axiosInstance.put('/objects/non-existing-id', {
            name: 'Invalid Update'
        });

        expect(response.status).toBe(404);
    });

    // Positive Test: Delete
    test('DELETE: Delete existing resource', async () => {
        const response = await axiosInstance.delete(`/objects/${resourceId}`);
        expect(response.status).toBe(200);
    });

    // Negative Test: Delete
    test('DELETE: Fail to delete non-existing resource', async () => {
        const response = await axiosInstance.delete('/objects/non-existing-id');
        expect(response.status).toBe(404);
    });
});
