

//           ['JOHN', 'BABA', 'YAGA', 'WICK']
//      "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps."

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

let arr1 = studentRecords.map(x => x.name.toUpperCase());
console.log(arr1);

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let studentRecords1 = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

          let arr2 = studentRecords1.filter(mark => mark.marks >50);
          console.log(arr2);


        //   Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.


        let studentRecords2 = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

          let arr3 = studentRecords2.filter(res => res.marks >50 && res.id >120);
          console.log(arr3);


        //   Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.       
          

        let studentRecords3 = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] ;

        let arr4 = studentRecords3.reduce((acc,cur) => acc+cur.marks,0);
        console.log(arr4);

        // Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

        let studentRecords4 = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] ;

        let arr5 =  studentRecords4.filter(mark => mark.marks >50);
        console.log(arr5.map(a => a.name));

        // Question 6: This time we are required to print the sum of marks of the students with id > 120.

        let studentRecords5 = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] ;

        let arr6 = studentRecords5.filter(id => id.id > 120).reduce((acc,cur) => acc+cur.marks,0);
        console.log(arr6);

        // Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

        let studentRecords6 = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] ;

        let arr7 = studentRecords6.map (function(mark){
                    if(mark.marks < 50){
                        mark.marks +=15
                    };
                    return mark;
        }).filter(mark => mark.marks > 50).reduce((acc,cur) => acc+cur.marks,0);
        console.log(arr7);

        // Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
        
        let arrobj = [
            {name: 'durga', class: 'final year', rollno: 10},
            {name: 'divya', class: 'final year', rollno: 09},
            {name: 'vishnu', class: 'final year', rollno: 43},
            {name: 'swathi', class: 'final year', rollno: 32},
            {name: 'raji', class: 'final year', rollno: 23},
            {name: 'prabha', class: 'final year', rollno:20},
        ];
        console.log(arrobj);
        
