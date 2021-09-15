Sukanya Gorrepati10:40 PM
The statement to check whether an internal table itab_test has no records, is:
IF itab_test is initial.
Data: BEGIN OF ITAB OCCURS 0,
FIELD1(10),
FIELD2(10),
END OF ITAB.
DO 20 TIMES.
ITAB-FIELD1 = ‘Field1’.
ITAB-FIELD2 = ‘Field2’.
ENDDO.
Sukanya Gorrepati10:43 PM
READ TABLE ITAB_TEST WITH KEY 
VBELN = k_vbeln. 
If multiple records in table ITAB satisfy the condition, then 
Sukanya Gorrepati10:44 PM
 If ITAB has 1000 entries, and DBTAB is a large table, which is better in terms of performance?
i) LOOP AT ITAB.
SELECT * INTO ITAB_2 FROM DBTAB WHERE
KEY1 = ITAB-KEY1.
APPEND ITAB_2.
ENDSELECT.
ENDLOOP.
ii) LOOP AT ITAB.
SELECT * INTO TABLE ITAB_2 FROM DBTAB WHERE
KEY1 = ITAB-KEY1.
ENDLOOP.
iii) SELECT * INTO TABLE ITAB_2 FROM DBTAB 
FOR ALL ENTRIES IN ITAB WHERE
KEY1 = ITAB-KEY1.
Sukanya Gorrepati10:46 PM
 (iii) is better than (ii) and (ii) is better than (i).
TYPES: BEGIN OF TYPE1,
FLD1,
FLD2,
FLD3,
END OF TYPE1.
DATA: ITAB1 TYPE STANDARD TABLE OF TYPE1.
ITAB1-FLD1 = ‘a’.
ITAB1-FLD2 = ‘b’.
ITAB1-FLD3 = ‘c’.
APPEND ITAB1.
Sukanya Gorrepati10:47 PM
Compilation error due to method of declaration of table.
Sukanya Gorrepati10:48 PM
DATA: BEGIN OF ITAB OCCURS 0,
Fld1 (1),
Fld2 (1),
Fld3 (1),
END OF ITAB.
ITAB has 5 records – [ (1,1,1), (1,1,2), (1,2, 2), (2,2,2), (2,2,3) ].
The code segment:
LOOP AT ITAB.
AT NEW fld3.
WRITE fld3.
ENDAT.
ENDLOOP.
Produces the output:
1 2 2 2 3
Sukanya Gorrepati10:51 PM
PERFORM ROUTINE1 USING val1.
FORM ROUTINE1 USING temp1.
Temp1 = 10.
ENDFORM.
Is the value of val1 changed?
Sukanya Gorrepati10:52 PM
S1 = ‘ABCAB’.
S2 = ‘ABCD ‘.
IF S1 CN S2.
WRITE ‘a’.
ELSE.
WRITE ‘b’.
ENDIF.
Output of above code is:
Sukanya Gorrepati10:56 PM
14) Tell me some BAPI names what you have used and where you have used?
BAPI_ACC_DOCUMENT_POST
Various steps involved in posting a document from a file are:
1.     Upload data from excel file into an internal table using FM ‘GUI_UPLOAD’ as explained in subroutine UPLOAD_FORM_EXCEL.
2.     After we upload excel data into an internal table we need split the data into field patterns into header data and line item data as explained in subroutine ‘SPLIT_INTO_RECORDS’. This splitting is done according
FROM 14is used. User can split the data according to their file format.
3.     After the splitting, loop at the line item table and validate the GL account numbers. If the GL accounts are valid, Populate the line item data into BAPI GL and currency tables otherwise append that GL account number into error message table. This is explained in subroutines ‘VALIDATE_GL’ and ‘POPULATE_BAPI’.
4.     In case of intercompany postings, in which line item and Header Company codes are different. Find out l
5.     Above step is required because a document is posted in 3 currencies document currency, company code currency and group currency. In case of the intra company code postings all the currencies are same so the amounts are same In all3 currencies. But in case of inter company code postings the currencies are different so the amounts are also different. Due to this we need to give and exchange rate base on which the BAPI will convert the amounts.
6.     Next step in document posting is to chec


Sukanya Gorrepati11:01 PM
After running a BDC program in background, next day morning when you see the 
Results, few records are not updated (error records). What will you do then?
Sukanya Gorrepati11:02 PM
We look into the list of incorrect session and process it again. to correct incorrect session we analyze the session to determine which screen and value produced the error. For small errors in data we correct them interactively otherwise modify batch input program that has generated the session or many times even the data file. 
You are given functional specs for a BDC program and you need to decide whether 
to write a method call transaction or a session. How u will decide?
Generally if time is critical we go for call Transaction and also it depends on the no'of records uploading, supose if we have to upload less no'of records we will use call Transaction method otherwise session.
Sukanya Gorrepati11:05 PM
LOOP AT ITAB_DTL_1.
COLLECT ITAB_DTL_1 INTO ITAB_FINAL.
ENDLOOP.
If the tables contain character fields, which table should be declared with the keys 
Explicitly specified?
Sukanya Gorrepati11:06 PM
One field’s contents to another field
One structure’s contents to another compatible structure
One table’s contents to another compatible table
A part of one field to another field
Sukanya Gorrepati11:10 PM
Emphasize is a 4-char field where :
- 1st char = C (color property)
- 2nd char = color code (from 0 to 7)
0 = background color
1 = blue
2 = gray
3 = yellow
4 = blue/gray
5 = green
6 = red
7 = orange
- 3rd char = intensified (0=off, 1=on)
- 4th char = inverse display (0=off, 1=on)
Suppose the field descriptions is long and every time user need to adjust the width manually in ALV grid output. Set colwidth_optimize in layout of ALV grid display
Sukanya Gorrepati11:12 PM
To sum subtotal, first in FM 'REUSE_ALV_GIRD_DISPLAY' or 'REUSE_ALV_LIST_DISPLAY', a parameter 'it_sort' is used to sort the outputlist. In the structure slis_sortinfo_alv, a field 'subtot' is used for this function. When you define sort table, you should point out the fieldname, and give value 'X' to 'subtot'. This is point out which field is depending on to sum subtotal. Second, you should point out which field should be summed. This is the same as sum total. When you define fieldcategory, poi
Sukanya Gorrepati11:13 PM
    Screens (Dynpros)        
    ABAP/4 module Pool. 
    Transaction code.
You11:14 PM
Module pool is dialog
Sukanya Gorrepati11:15 PM
The system instead transfers data by comparing screen fields names with ABAP/4 variable names. If both names are the same, it transfers screen fields values to ABAP/4 programs fields and Vice Versa.This happens immediately after displaying the screen
24) What is an “on request” statement?
The ABAP/4 Module is called only if the user has entered the value in the field value since the last screen display .
The Value counts as changed Even if the User simply types in the value that was already there .In general ,the ON REQUEST condition is triggered through any Form of” MANUAL INPUT’. 
You11:16 PM
BDC
BAPI
ENHANCEMENTS
DYNPRO



Differences between Types & Field Strings?
Sukanya Gorrepati11:23 PM
TADIR is a table which holds the Data Dictionary objects. i.e; Data elements, Domains, Tables & TRDIR stores all the Programs details.

TADIR is a table which holds the Data Dictionary objects. i.e; Data elements, Domains, Tables & TRDIR stores all the Programs details.

Sukanya Gorrepati11:24 PM
The Programs details are stored in the table TADIR, Data base tables in DD02L and DD02T and the development class packages in TDEVC.
Sukanya Gorrepati11:25 PM
DD01L	Domains
DD01T	Domain Texts
DD02L	SAP Tables
DD02T	SAP Table Texts – To find table names using Short Description
DD03L	Table Fields
DD03T	Texts for fields
DD04L	Data Elements
DD04T	Data Element Texts
DD05S	Foreign Key Fields
TSTC	Transaction Codes
TFDIR	Function Modules
