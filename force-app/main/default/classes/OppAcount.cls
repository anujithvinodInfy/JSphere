public class OppAcount {
    
    public static void getDetails()
    {

        system.debug([select Id,(select Id from Opportunities) from Account]);
    }

}