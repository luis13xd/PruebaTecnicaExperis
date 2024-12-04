import generateColor from '../../src/utils/GenerateColor';

describe('Pruebas en GenerateColor', () => {
    it('debe devolver un color válido para un userId dado', () => {
        const testCases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const colors = [
          '#28a745', 
          '#fd7e14', 
          '#007bff',
          '#6f42c1', 
          '#e83e8c', 
          '#ffc107', 
          '#17a2b8', 
          '#dc3545', 
          '#20c997', 
          '#343a40',
        ];
    
        testCases.forEach(userId => {
          const color = generateColor(userId);
          expect(colors).toContain(color);
        });
      });
    
      it('debe devolver un color válido incluso para userId superior a la longitud del array', () => {
        const userId = 11;
        const color = generateColor(userId);
        const colors = [
          '#28a745', 
          '#fd7e14', 
          '#007bff',
          '#6f42c1', 
          '#e83e8c', 
          '#ffc107', 
          '#17a2b8', 
          '#dc3545', 
          '#20c997', 
          '#343a40',
        ];
        expect(colors).toContain(color);
      });
    });