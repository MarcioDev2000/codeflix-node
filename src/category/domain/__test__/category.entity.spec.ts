import { Category } from '../category.entity';


describe('Category Unit Test', () => {
    test('should create a category with default values', () => {
        const category = new Category({ name: 'Movies' });
        expect(category.category_id).toBeDefined();
        expect(category.name).toBe('Movies');
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create a category with all values', () => {
        const created_at = new Date();
        const category = new Category({
            category_id: '123',
            name: 'Documentaries',
            description: 'A category for documentaries',
            is_active: false,
            created_at
        });
        expect(category.category_id).toBe('123');
        expect(category.name).toBe('Documentaries');
        expect(category.description).toBe('A category for documentaries');
        expect(category.is_active).toBeFalsy();
        expect(category.created_at).toBe(created_at);
    });

    test('should create a category with name and description', () => {
        const category = new Category({
            name: 'Series',
            description: 'A category for series'
        });
        expect(category.category_id).toBeDefined();
        expect(category.name).toBe('Series');
        expect(category.description).toBe('A category for series');
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should change name, description, and is_active of a Category', () => {
        const category = new Category({ name: 'Movies' });

        // Simulando métodos para alterar os campos
        category.name = 'Series';
        category.description = 'A category for series';
        category.is_active = false;

        expect(category.name).toBe('Series');
        expect(category.description).toBe('A category for series');
        expect(category.is_active).toBeFalsy();
    });

    test('should disable a Category', () => {
        const category = new Category({ name: 'Movies' });

        // Simulando método para desabilitar
        category.is_active = false;

        expect(category.is_active).toBeFalsy();
    });
});